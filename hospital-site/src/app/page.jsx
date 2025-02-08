import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/WelcomePage");
  }, [router]);

  return null;
}
