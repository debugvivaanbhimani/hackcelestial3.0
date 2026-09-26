import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-10">
      <div className="text-center">
        <h1 className="text-2xl font-medium">GroupTrip Ledger</h1>
        <p className="mt-1 text-sm text-gray-500">
          Create your account to join the trip.
        </p>
      </div>
      <SignUp />
    </main>
  );
}
