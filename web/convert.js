const fs = require('fs');
const path = require('path');

const uiDir = path.join(__dirname, '../ui');
const outDir = path.join(__dirname, 'components/ui/converted');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function kebabToPascal(str) {
  return str.split(/[-_ ]+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

function convertHtmlToJsx(html) {
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : html;

  // Remove script tags at the end of body
  content = content.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Basic HTML to JSX conversions
  content = content.replace(/class=/g, 'className=');
  content = content.replace(/for=/g, 'htmlFor=');
  content = content.replace(/onclick="([^"]*)"/gi, 'onClick={() => {}}');
  content = content.replace(/tabindex=/gi, 'tabIndex=');
  content = content.replace(/stroke-width=/gi, 'strokeWidth=');
  content = content.replace(/stroke-linecap=/gi, 'strokeLinecap=');
  content = content.replace(/stroke-linejoin=/gi, 'strokeLinejoin=');
  content = content.replace(/fill-rule=/gi, 'fillRule=');
  content = content.replace(/clip-rule=/gi, 'clipRule=');
  content = content.replace(/viewbox=/gi, 'viewBox=');
  content = content.replace(/rows="(\d+)"/gi, 'rows={$1}');

  // Inline styles to object (very basic, won't cover all edge cases)
  content = content.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(rule => {
      if (!rule.trim()) return;
      const [key, value] = rule.split(':');
      if (key && value) {
        const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[camelKey] = value.trim().replace(/'/g, '"');
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  // Self closing tags
  const voidElements = ['img', 'input', 'hr', 'br', 'meta', 'link'];
  voidElements.forEach(tag => {
    const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, 'gi');
    content = content.replace(regex, `<${tag}$1 />`);
  });

  // Comments (<!-- --> to {/* */})
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  return `<>\n${content}\n</>`;
}

function processDirectory(directory) {
  const items = fs.readdirSync(directory, { withFileTypes: true });

  for (const item of items) {
    if (item.name === '.DS_Store') continue;
    
    const fullPath = path.join(directory, item.name);
    
    if (item.isDirectory()) {
      // Check if it contains code.html
      const codeHtmlPath = path.join(fullPath, 'code.html');
      if (fs.existsSync(codeHtmlPath)) {
        const html = fs.readFileSync(codeHtmlPath, 'utf8');
        const jsx = convertHtmlToJsx(html);
        
        const componentName = kebabToPascal(item.name);
        const tsxContent = `"use client";\nimport React from 'react';\n\nexport default function ${componentName}() {\n  return (\n    ${jsx}\n  );\n}\n`;
        
        fs.writeFileSync(path.join(outDir, `${componentName}.tsx`), tsxContent);
        console.log(`Converted ${item.name} to ${componentName}.tsx`);
      } else {
        processDirectory(fullPath);
      }
    }
  }
}

console.log('Starting conversion...');
processDirectory(uiDir);
console.log('Done!');
