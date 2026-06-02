import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { therapyServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bilingual Therapy Services | English and Mandarin Counseling",
  description: "Culturally sensitive bilingual therapy for individuals, couples, and families in English and Mandarin.",
};

export default function TherapyPage() {
  return (
    <>
      <Hero compact eyebrow="Bilingual support" title="Therapy Services" description="Bilingual therapy services for individuals, couples, and families. Services are offered with cultural sensitivity and care for clients navigating relationships, parenting, life transitions, immigration stress, and family challenges." />
      <Section>
        <div className="container-page">
          <p className="eyebrow">A thoughtful place to begin</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-teal sm:text-4xl">Support for you and the people closest to you.</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {therapyServices.map((item, index) => <ServiceCard key={item.title} {...item} index={index} />)}
          </div>
        </div>
      </Section>
      <CTA text="Schedule a free 15-minute consultation." />
    </>
  );
}
