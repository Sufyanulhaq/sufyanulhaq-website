import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="pt-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-foreground/70">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/">Back Home</Button>
      </div>
    </Section>
  );
}
