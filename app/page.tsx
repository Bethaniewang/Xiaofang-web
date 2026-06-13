import type { Metadata } from "next";
import Link from "next/link";
import { BookingButton } from "@/components/BookingButton";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { homeServices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Immigration Psychological Evaluation | Side By Side Counseling & Consulting",
  description:
    "Bilingual immigration mental health evaluations, therapy, and consulting services in Maryland, Virginia, and Washington, D.C.",
};

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Bilingual English and Mandarin support"
        title={site.provider}
        subtitle="Let's stay together"
        description="Bilingual counseling, immigration mental health evaluations, therapy, and consulting services in Maryland, Virginia, and Washington, D.C."
        actions={
          <>
            <BookingButton />
            <Link href="/immigration-evaluation" className="button-secondary">Learn About Immigration Evaluations</Link>
          </>
        }
      />

      <div className="border-y border-white/10 bg-teal py-5 text-white">
        <div className="container-page flex flex-wrap gap-x-7 gap-y-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/90">
          {site.licenses.map((license) => <span key={license}>Licensed in {license}</span>)}
          <span>English and Mandarin Services</span>
        </div>
      </div>

      <Section>
        <div className="container-page">
          <p className="eyebrow">How we can help</p>
          <h2 className="mt-4 max-w-3xl text-4xl leading-tight text-teal sm:text-5xl">Services designed with care and cultural understanding.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {homeServices.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}
          </div>
        </div>
      </Section>

      <Section className="bg-linen">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative min-h-80 overflow-hidden rounded-[2rem] border border-white/30 bg-teal shadow-soft">
            <div className="absolute -left-10 top-16 h-48 w-48 rounded-full border border-white/25" />
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-tl-full bg-sage/60" />
            <p className="absolute bottom-9 left-9 max-w-[250px] font-serif text-3xl leading-tight text-white">Compassionate care, side by side.</p>
          </div>
          <div>
            <p className="eyebrow">Meet your provider</p>
            <h2 className="mt-4 text-4xl leading-tight text-teal sm:text-5xl">About Dr. Wang Lanterman</h2>
            <p className="mt-6 leading-8 text-ink/70">
              Dr. Xiaofang (Bethanie) Wang Lanterman is a licensed clinical
              marriage and family therapist with over a decade of experience.
              She provides bilingual services in English and Mandarin and
              supports clients through therapy, immigration evaluations, and consulting.
            </p>
            <Link href="/about" className="button-secondary mt-7">Learn More About Us</Link>
          </div>
        </div>
      </Section>
      <CTA text="Do not wait. Let's solve this together." />
    </>
  );
}
