"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { BookingButton } from "./BookingButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-teal/10 bg-cream/90 backdrop-blur-xl">
      <div className="container-page flex min-h-24 items-center justify-between gap-5">
        <Link href="/" className="group max-w-[220px] text-teal lg:max-w-[260px]">
          <span className="block font-serif text-xl leading-none tracking-tight transition group-hover:text-teal-dark">Side By Side</span>
          <span className="mt-1.5 block text-[0.58rem] font-bold uppercase leading-tight tracking-[0.2em] text-ink/60">
            Counseling & Consulting
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] transition hover:text-teal ${
                pathname === item.href ? "text-teal after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-teal" : "text-ink/65"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <button type="button" className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-teal" aria-label="Language selection placeholder">
            EN / 中文
          </button>
          <BookingButton className="button-primary whitespace-nowrap px-5 py-3 text-[0.65rem]" />
        </div>

        <button
          type="button"
          className="rounded-full border border-teal/15 bg-white/45 p-3 text-teal transition hover:bg-white xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-teal/10 bg-cream/98 px-5 pb-7 pt-3 shadow-soft xl:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-teal/10 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-ink/75"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <BookingButton />
            <button type="button" className="text-sm font-bold text-teal" aria-label="Language selection placeholder">
              EN / 中文
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
