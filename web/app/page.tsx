import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">GroupTrip Ledger UI Components</h1>
      <ul className="space-y-2">
        <li><Link href="/demo/ai-trip-builder" className="text-blue-500 hover:underline">AI Trip Builder</Link></li>
        <li><Link href="/demo/settle" className="text-blue-500 hover:underline">Settle</Link></li>
        <li><Link href="/demo/expenses" className="text-blue-500 hover:underline">Expenses</Link></li>
        <li><Link href="/demo/money-pool" className="text-blue-500 hover:underline">Money Pool</Link></li>
        <li><Link href="/demo/itinerary" className="text-blue-500 hover:underline">Itinerary</Link></li>
      </ul>
    </div>
  );
}
