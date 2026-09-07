"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";

export default function SiteError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 pt-24 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Something went wrong.
          </h1>
          <p className="mt-3 text-foreground/70">
            This page failed to load. It&apos;s usually temporary — try again in
            a moment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => retry()}
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Try again
            </button>
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
