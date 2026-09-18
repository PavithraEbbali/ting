"use client";

import { useId, useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { SearchIcon } from "./Icons";

type Status =
  | { kind: "idle" }
  | { kind: "error"; message: string }
  | { kind: "submitted"; zip: string };

interface ZipCheckerProps {
  className?: string;
}

/**
 * Availability checker, sized as a single compact control rather than a panel —
 * one white pill on the dark hero with the label carried by placeholder text
 * and a visually-hidden <label> for assistive tech.
 *
 * This is a static build with no serviceability API, so the form validates the
 * ZIP locally and hands the visitor to the sales line rather than asserting
 * coverage it cannot verify. Wiring a real lookup later only means replacing
 * the body of handleSubmit.
 */
export default function ZipChecker({ className }: ZipCheckerProps) {
  const inputId = useId();
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = zip.trim();

    if (!/^\d{5}$/.test(value)) {
      setStatus({
        kind: "error",
        message: "Enter a 5-digit ZIP code to continue.",
      });
      return;
    }

    setStatus({ kind: "submitted", zip: value });
  }

  const hasError = status.kind === "error";

  return (
    <div className={cn("w-full max-w-[34rem]", className)}>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor={inputId} className="sr-only">
          Check service availability at your address
        </label>

        {/* The pill sits inside a 1.5px shell. A conic gradient rotates behind
            it and shows through that gap as a light running around the border. */}
        <div
          className={cn(
            "relative overflow-hidden rounded-full p-[1.5px] transition-shadow",
            hasError && "ring-2 ring-error-50",
          )}
        >
          <span
            aria-hidden="true"
            className="animate-beam absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,#3253ff_300deg,#84aeff_330deg,#ffffff_345deg,transparent_360deg)] will-change-transform"
          />
          <div
            className={cn(
              "relative flex items-center gap-2 rounded-full bg-white p-1.5 pl-4 ring-1 transition-shadow",
              hasError
                ? "ring-transparent"
                : "ring-white/0 focus-within:ring-2 focus-within:ring-brand-40",
            )}
          >
            <SearchIcon className="h-[18px] w-[18px] shrink-0 text-ink-60" />
            <input
              id={inputId}
              name="zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              placeholder="Enter your ZIP code"
              value={zip}
              aria-invalid={hasError}
              aria-describedby={`${inputId}-status`}
              onChange={(e) => {
                setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
                if (status.kind !== "idle") setStatus({ kind: "idle" });
              }}
              className="h-11 w-full min-w-0 bg-transparent text-[0.98rem] font-medium text-ink-90 placeholder:text-ink-60 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-ink-90 px-4 text-[0.88rem] font-semibold text-white transition-colors duration-200 hover:bg-brand-60 active:translate-y-px sm:px-5 sm:text-[0.9rem]"
            >
              <span className="sm:hidden">Check</span>
              <span className="hidden sm:inline">Check availability</span>
            </button>
          </div>
        </div>
      </form>

      <div id={`${inputId}-status`} role="status" aria-live="polite">
        {status.kind === "error" ? (
          <p className="mt-2.5 pl-1 text-[0.82rem] font-semibold text-accent-40">
            {status.message}
          </p>
        ) : status.kind === "submitted" ? (
          <div className="mt-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-[0.9rem] font-bold text-white">
              Confirming availability for {status.zip}
            </p>
            <p className="mt-1.5 text-[0.86rem] leading-relaxed text-navy-20">
              Ting builds fiber block by block, so coverage can differ between
              two addresses in the same ZIP code. Provide the full address by
              phone and a specialist will confirm serviceability and current
              pricing.
            </p>
          </div>
        ) : (
          <p className="mt-2.5 pl-1 text-[0.8rem] leading-snug text-navy-30">
            Free to check · No obligation · Serviceability confirmed before you
            order
          </p>
        )}
      </div>
    </div>
  );
}
