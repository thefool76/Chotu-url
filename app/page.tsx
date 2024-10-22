"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Homepage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4 sm:p-8">
      <div
        className={`text-center transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <LinkIcon className="w-16 h-16 text-white mx-auto mb-6" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Shorten Your Links
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Create short, memorable links in seconds. Boost your online presence
          with our powerful URL shortener.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            className="text-lg px-8 py-6"
            asChild
          >
            <div>
              <Link href="/login">Lets start</Link>
              <ChevronRight className="ml-2 h-5 w-5" />
            </div>
          </Button>
        </div>
        <p className="text-l sm:text-xl py-3 text-white">Made with Hanko.io</p>
      </div>
      <footer className="absolute bottom-4 text-white text-sm">
        © {new Date().getFullYear()} Your chotu Url. All rights reserved.
      </footer>
    </div>
  );
}
