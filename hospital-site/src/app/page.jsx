import { useEffect } from "react";
import { useRouter } from "next/router";

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/HomePage");
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to KYS General Hospital</h1>
      <p className="text-lg">You will be redirected to the homepage shortly...</p>
    </div>
  );
}
