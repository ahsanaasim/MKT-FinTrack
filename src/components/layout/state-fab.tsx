"use client";

import { useState } from "react";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  type PreviewState,
  usePreviewState,
} from "@/lib/state-preview";
import { cn } from "@/lib/utils";

const options: { id: PreviewState; label: string }[] = [
  { id: "ready", label: "Ready" },
  { id: "loading", label: "Loading" },
  { id: "empty", label: "Empty" },
  { id: "error", label: "Error" },
  { id: "plan_limit", label: "Plan limit" },
  { id: "permission_denied", label: "Permission" },
];

export function StatePreviewFab() {
  const { state, setState } = usePreviewState();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 end-5 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="w-44 rounded-lg border border-border bg-background p-2 shadow-lg animate-fade-in">
          <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
            Screen state
          </p>
          <div className="flex flex-col gap-1">
            {options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setState(opt.id);
                  setOpen(false);
                }}
                className={cn(
                  "rounded-md px-2 py-1.5 text-start text-sm transition-colors",
                  state === opt.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <Button
        size="sm"
        variant="secondary"
        className="rounded-full border border-border shadow-md"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Toggle state preview"
      >
        <Layers className="size-4" />
        States
      </Button>
    </div>
  );
}
