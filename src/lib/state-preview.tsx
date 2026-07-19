"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PreviewState =
  | "ready"
  | "loading"
  | "empty"
  | "error"
  | "plan_limit"
  | "permission_denied";

type StatePreviewContextValue = {
  state: PreviewState;
  setState: (state: PreviewState) => void;
  isLoading: boolean;
  isEmpty: boolean;
  isError: boolean;
  isPlanLimit: boolean;
  isPermissionDenied: boolean;
  isReady: boolean;
};

const StatePreviewContext = createContext<StatePreviewContextValue | null>(
  null
);

export function StatePreviewProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PreviewState>("ready");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let cancelled = false;

    queueMicrotask(() => {
      if (cancelled) return;

      const saved = window.sessionStorage.getItem("fintrack-preview-state");
      if (
        saved === "ready" ||
        saved === "loading" ||
        saved === "empty" ||
        saved === "error" ||
        saved === "plan_limit" ||
        saved === "permission_denied"
      ) {
        setState(saved);
      }
      setHydrated(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const updateState = useCallback((next: PreviewState) => {
    setState(next);
    window.sessionStorage.setItem("fintrack-preview-state", next);
  }, []);

  const value = useMemo(
    () => ({
      state: hydrated ? state : "ready",
      setState: updateState,
      isLoading: hydrated && state === "loading",
      isEmpty: hydrated && state === "empty",
      isError: hydrated && state === "error",
      isPlanLimit: hydrated && state === "plan_limit",
      isPermissionDenied: hydrated && state === "permission_denied",
      isReady: !hydrated || state === "ready",
    }),
    [hydrated, state, updateState]
  );

  return (
    <StatePreviewContext.Provider value={value}>
      {children}
    </StatePreviewContext.Provider>
  );
}

export function usePreviewState() {
  const ctx = useContext(StatePreviewContext);
  if (!ctx) {
    throw new Error("usePreviewState must be used within StatePreviewProvider");
  }
  return ctx;
}
