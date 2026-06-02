import type { Metadata } from "next";
import Link from "next/link";
import { BookingButton } from "@/components/BookingButton";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Side By Side Counseling & Consulting",
  description: "Contact Side By Side Counseling & Consulting to request a consultation or book an appointment.",
};

export default function ContactPage() {
  return (
    <>
      <Hero compact eyebrow="Contact" title="Let's Connect" subtitle="Let's talk about the next step together." description="Request a free 15-minute consultation now. Reach out directly or use the booking link to find a time that works for you." actions={<BookingButton />} />
      <Section>
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Contact details</p>
            <h2 className="mt-4 text-4xl leading-tight text-teal sm:text-5xl">We&apos;re here when you&apos;re ready.</h2>
            <div className="mt-9 space-y-7 text-sm leading-7 text-ink/75">
              <div>
                <h3 className="text-xl text-teal">Phone</h3>
                <Link href={site.phoneHref} className="hover:text-terracotta">{site.phone}</Link>
              </div>
              <div>
                <h3 className="text-xl text-teal">Email</h3>
                <Link href={`mailto:${site.email}`} className="break-all hover:text-terracotta">{site.email}</Link>
              </div>
              {site.locations.map((location) => (
                <address key={location.name} className="not-italic">
                  <h3 className="text-xl text-teal">{location.name}</h3>
                  {location.lines.map((line) => <span className="block" key={line}>{line}</span>)}
                </address>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
