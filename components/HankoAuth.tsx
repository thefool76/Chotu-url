'use client'
import { Hanko, register } from "@teamhanko/hanko-elements";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;

export default function HankoAuth() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => setHanko(new Hanko(hankoApi)), []);

  const redirectAfterLogin = useCallback(() => {
    router.replace("/dashboard");
  }, [router]);

  useEffect(() =>
    hanko?.onSessionCreated(() => {
      redirectAfterLogin();
    }), [hanko, redirectAfterLogin]);

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);

  return <hanko-auth />;
}
