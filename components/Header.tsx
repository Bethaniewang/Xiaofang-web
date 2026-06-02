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
    <header className="sticky top-0 z-50 border-b border-teal/10 bg-cream/95 backdrop-blur">
      <div className="container-page flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="max-w-[210px] text-sm font-bold leading-tight text-teal lg:max-w-[250px]">
          {site.businessName}
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-4 xl:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-bold transition hover:text-teal ${
                pathname === item.href ? "text-teal" : "text-ink/75"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <button type="button" className="text-xs font-bold text-teal" aria-label="Language selection placeholder">
            EN / 中文
          </button>
          <BookingButton className="button-primary whitespace-nowrap px-5 py-2.5 text-xs" />
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-teal xl:hidden"
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
        <div id="mobile-menu" className="border-t border-teal/10 bg-cream px-5 pb-6 pt-3 xl:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-teal/10 py-3 text-sm font-bold text-ink/80"
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
