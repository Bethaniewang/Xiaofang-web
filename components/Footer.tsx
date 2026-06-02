import Link from "next/link";
import { site } from "@/lib/site";
import { BookingButton } from "./BookingButton";

export function Footer() {
  return (
    <footer className="bg-teal-dark py-14 text-white">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1.35fr]">
        <div>
          <p className="text-lg font-bold">{site.businessName}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            Bilingual counseling, immigration mental health evaluations, therapy,
            and consulting services.
          </p>
          <BookingButton className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-teal transition hover:bg-sand" />
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-sage">Contact</h2>
          <Link href={site.phoneHref} className="mt-4 block text-sm hover:text-sage">
            {site.phone}
          </Link>
          <Link href={`mailto:${site.email}`} className="mt-2 block break-all text-sm hover:text-sage">
            {site.email}
          </Link>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-sage">Locations</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {site.locations.map((location) => (
              <address key={location.name} className="text-sm not-italic leading-6 text-white/80">
                <strong className="text-white">{location.name}</strong>
                <br />
                {location.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            ))}
          </div>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-white/15 pt-6 text-xs text-white/60">
        © {new Date().getFullYear()} {site.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
