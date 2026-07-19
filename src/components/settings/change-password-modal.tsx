"use client";

import { KeyRound, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type ChangePasswordModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ChangePasswordModal({
  open,
  onOpenChange,
}: ChangePasswordModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <KeyRound className="size-5" />
          </div>
          <DialogTitle className="text-xl">Change password</DialogTitle>
          <DialogDescription>
            Update your FinTrack password. Keep it unique from banking and email
            credentials.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current password</Label>
            <Input
              id="current-password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter current password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New password</Label>
            <Input
              id="new-password"
              type="password"
              autoComplete="new-password"
              placeholder="At least 12 characters"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm new password</Label>
            <Input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              placeholder="Re-enter new password"
            />
          </div>
          <div className="flex gap-3 rounded-xl bg-secondary p-3 text-sm text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-foreground" />
            Password changes revoke stale sessions and keep connected accounts
            authorized.
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)}>Save password</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
