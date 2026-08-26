import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MotionProvider } from "@/components/motion/MotionProvider";

export default function NotFound() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="flex-1">
        <Section className="pt-24 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-3 text-foreground/70">
            Looks like you&apos;ve taken a wrong turn.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/">Back to Home →</Button>
          </div>
        </Section>
      </main>
      <Footer />
    </MotionProvider>
  );
}
