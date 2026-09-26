import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Empty middleware for now, just passes the request through
  return NextResponse.next();
}

export const config = {
  matcher: [], // Empty matcher so it doesn't run on everything by default
};
