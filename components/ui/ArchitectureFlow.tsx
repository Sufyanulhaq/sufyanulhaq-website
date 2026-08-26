import { ArrowRight } from "lucide-react";

export function ArchitectureFlow({ stages }: { stages: string[] }) {
  if (!stages.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-muted p-5">
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center gap-2">
          <span className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium">
            {stage}
          </span>
          {i < stages.length - 1 && (
            <ArrowRight
              className="h-4 w-4 shrink-0 text-foreground/40"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}
