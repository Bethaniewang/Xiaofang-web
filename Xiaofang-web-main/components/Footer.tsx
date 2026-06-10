import Link from "next/link";
import { site } from "@/lib/site";
import { BookingButton } from "./BookingButton";

export function Footer() {
  return (
    <footer className="bg-teal-dark py-16 text-white sm:py-20">
      <div className="container-page grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1.35fr]">
        <div>
          <p className="font-serif text-2xl">{site.businessName}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
            Bilingual counseling, immigration mental health evaluations, therapy,
            and consulting services.
          </p>
          <BookingButton className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-teal transition hover:-translate-y-0.5 hover:bg-sand" />
        </div>
        <div>
          <h2 className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sage">Contact</h2>
          <Link href={site.phoneHref} className="mt-5 block text-sm text-white/80 transition hover:text-sage">
            {site.phone}
          </Link>
          <Link href={`mailto:${site.email}`} className="mt-2 block break-all text-sm text-white/80 transition hover:text-sage">
            {site.email}
          </Link>
        </div>
        <div>
          <h2 className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sage">Locations</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {site.locations.map((location) => (
              <address key={location.name} className="text-sm not-italic leading-7 text-white/70">
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
      <div className="container-page mt-12 border-t border-white/15 pt-6 text-[0.68rem] uppercase tracking-[0.1em] text-white/50">
        © {new Date().getFullYear()} {site.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
