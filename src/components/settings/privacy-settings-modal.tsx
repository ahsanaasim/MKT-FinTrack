"use client";

import { EyeOff, LockKeyhole, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

type PrivacySettingsModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const privacyOptions = [
  {
    id: "mask-balances",
    title: "Mask balances in shared views",
    description:
      "Hide rupee amounts when presenting dashboards or exporting screenshots.",
    defaultChecked: true,
  },
  {
    id: "encrypted-downloads",
    title: "Require passcode for vault downloads",
    description:
      "Ask for a session passcode before statement PDFs or JSON files download.",
    defaultChecked: true,
  },
  {
    id: "analytics",
    title: "Privacy-preserving product analytics",
    description:
      "Share anonymous interaction events to improve parser and notification UX.",
    defaultChecked: false,
  },
];

export function PrivacySettingsModal({
  open,
  onOpenChange,
}: PrivacySettingsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <LockKeyhole className="size-5" />
          </div>
          <DialogTitle className="text-xl">Privacy settings</DialogTitle>
          <DialogDescription>
            Tune how FinTrack presents, protects, and learns from your financial
            workspace.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-paper/70 p-4">
            <div className="mb-2 flex items-center gap-2 font-medium">
              <EyeOff className="size-4" />
              Display privacy
            </div>
            <p className="text-sm text-muted-foreground">
              These controls affect this account only and can be changed at any
              time.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white">
            {privacyOptions.map((option, index) => (
              <div key={option.id}>
                <label className="flex cursor-pointer items-start justify-between gap-4 p-4">
                  <span>
                    <span className="block font-medium">{option.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {option.description}
                    </span>
                  </span>
                  <Switch defaultChecked={option.defaultChecked} />
                </label>
                {index < privacyOptions.length - 1 && <Separator />}
              </div>
            ))}
          </div>

          <div className="flex gap-3 rounded-xl bg-secondary p-3 text-sm text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-foreground" />
            Encryption settings remain enforced even when display privacy is
            relaxed.
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)}>Save privacy</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
