// Done by Ryan Tang
"use client";

import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-red-50">
      <h1 className="text-4xl font-bold mb-4 text-red-900">404 - Page Not Found</h1>
      <p className="text-lg text-red-700 mb-8">Sorry, the page you are looking for does not exist.</p>
      <button
        onClick={() => router.push("/home")}
        className="bg-blue-900 text-white px-4 py-2 rounded"
      >
        Go to Homepage
      </button>
    </div>
  );
}
