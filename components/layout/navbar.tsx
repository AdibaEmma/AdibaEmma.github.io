"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="container-edit pt-5">
        <motion.nav
          layout
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "pointer-events-auto flex items-center justify-between gap-6 transition-all duration-500",
            scrolled
              ? "rounded-full px-5 py-3 backdrop-blur-xl bg-[color-mix(in_oklch,var(--background)_70%,transparent)] border border-hairline"
              : "px-2 py-3",
          )}
        >
          {/* Wordmark — single mark, no duplicated monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="Home"
          >
            <span className="label-mono whitespace-nowrap">
              <span className="text-[var(--foreground)]">EMMANUEL</span>{" "}
              <span className="text-[var(--ink-muted)] group-hover:text-[var(--accent)] transition-colors duration-300">
                / ADIBA
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 label-mono uppercase transition-colors",
                      active
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                    )}
                  >
                    <span className="text-[var(--muted-foreground)] mr-2 tabular-nums">
                      0{i + 1}
                    </span>
                    {item.name}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-[color-mix(in_oklch,var(--foreground)_8%,transparent)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative h-9 w-9 rounded-full border border-hairline flex items-center justify-center overflow-hidden hover:bg-[var(--surface)] transition-colors"
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="block h-3.5 w-3.5 rounded-full transition-all duration-500"
                    style={{
                      background:
                        theme === "dark" ? "var(--accent)" : "var(--foreground)",
                      boxShadow:
                        theme === "dark"
                          ? "inset -3px -2px 0 0 var(--background)"
                          : "none",
                    }}
                  />
                </span>
              </button>
            )}

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden h-9 w-9 rounded-full border border-hairline flex items-center justify-center"
            >
              <span className="relative block w-4 h-3">
                <span
                  className={cn(
                    "absolute left-0 right-0 h-px bg-current transition-transform duration-300",
                    isOpen ? "top-1/2 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 right-0 h-px bg-current transition-transform duration-300",
                    isOpen ? "top-1/2 -rotate-45" : "bottom-0",
                  )}
                />
              </span>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto md:hidden mx-5 mt-3 rounded-3xl border border-hairline bg-[var(--background)]/95 backdrop-blur-xl"
          >
            <ul className="p-4 space-y-1">
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 hover:bg-[var(--surface)] transition-colors"
                  >
                    <span className="font-display text-2xl">{item.name}</span>
                    <span className="label-mono text-[var(--muted-foreground)]">
                      0{i + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
