import type { Metadata } from "next";
import { BookingButton } from "@/components/BookingButton";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { immigrationCases, immigrationFaqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Immigration Psychological Evaluation in Maryland, Virginia, and D.C.",
  description: "Bilingual immigration psychological evaluations for hardship waivers, U Visa, asylum, T Visa, and VAWA cases.",
};

export default function ImmigrationEvaluationPage() {
  return (
    <>
      <Hero compact eyebrow="Immigration evaluations" title="Immigration Psychological Evaluation" subtitle="Let's stay together" description="We provide immigration mental health evaluations to support clients and attorneys in documenting emotional, psychological, and family-related hardship." actions={<BookingButton />} />
      <Section>
        <div className="container-page">
          <p className="eyebrow">Case types</p>
          <h2 className="mt-3 text-3xl font-bold text-teal sm:text-4xl">Clear, compassionate documentation.</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {immigrationCases.map((item, index) => <ServiceCard key={item.title} {...item} index={index} />)}
          </div>
        </div>
      </Section>
      <Section className="bg-linen">
        <div className="container-page grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="eyebrow">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-bold text-teal">A little more clarity.</h2>
          </div>
          <FAQ items={immigrationFaqs} />
        </div>
      </Section>
      <CTA text="Do not wait. Let's solve this together." />
    </>
  );
}
