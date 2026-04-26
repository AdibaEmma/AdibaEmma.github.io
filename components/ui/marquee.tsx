"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: ReactNode[];
  reverse?: boolean;
  slow?: boolean;
  className?: string;
  separator?: ReactNode;
};

export function Marquee({
  items,
  reverse = false,
  slow = false,
  className,
  separator,
}: MarqueeProps) {
  const sep = separator ?? (
    <span className="mx-8 text-[var(--accent)] select-none" aria-hidden>
      ✦
    </span>
  );
  const set = (
    <div className="flex shrink-0 items-center pr-8">
      {items.map((item, i) => (
        <div key={i} className="flex items-center">
          {item}
          {sep}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden whitespace-nowrap",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "flex marquee-track",
          slow && "marquee-track--slow",
          reverse && "marquee-track--reverse",
        )}
      >
        {set}
        {set}
      </div>
    </div>
  );
}
