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
        title="Immigration Psychological Evaluation"
        subtitle="Let's stay together"
        description="Bilingual counseling, immigration mental health evaluations, therapy, and consulting services in Maryland, Virginia, and Washington, D.C."
        actions={
          <>
            <BookingButton />
            <Link href="/immigration-evaluation" className="button-secondary">Learn About Immigration Evaluations</Link>
          </>
        }
      />

      <div className="bg-teal py-5 text-white">
        <div className="container-page flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[0.12em]">
          {site.licenses.map((license) => <span key={license}>Licensed in {license}</span>)}
          <span>English and Mandarin Services</span>
        </div>
      </div>

      <Section>
        <div className="container-page">
          <p className="eyebrow">How we can help</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-teal sm:text-4xl">Services designed with care and cultural understanding.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {homeServices.map((service, index) => <ServiceCard key={service.title} {...service} index={index} />)}
          </div>
        </div>
      </Section>

      <Section className="bg-linen">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-72 overflow-hidden rounded-3xl bg-teal">
            <div className="absolute -left-10 top-16 h-48 w-48 rounded-full border border-white/30" />
            <div className="absolute bottom-0 right-0 h-52 w-52 rounded-tl-full bg-sage/60" />
            <p className="absolute bottom-8 left-8 max-w-[230px] text-2xl font-bold leading-tight text-white">Compassionate care, side by side.</p>
          </div>
          <div>
            <p className="eyebrow">Meet your provider</p>
            <h2 className="mt-3 text-3xl font-bold text-teal sm:text-4xl">About Dr. Wang Lanterman</h2>
            <p className="mt-6 leading-8 text-ink/75">
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
