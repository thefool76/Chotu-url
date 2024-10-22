'use client'
import { register } from "@teamhanko/hanko-elements";
import { useEffect } from "react";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);

  return <hanko-profile />;
}
