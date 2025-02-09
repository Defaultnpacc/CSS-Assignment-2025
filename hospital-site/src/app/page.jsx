// Done by Ryan Tang
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 bg-blue-50">
      <h1 className="text-4xl font-bold mb-4 text-blue-900">Welcome to KYS General Hospital</h1>
      <p className="text-lg text-blue-700">You will be redirected to the homepage shortly...</p>
    </div>
  );
}
