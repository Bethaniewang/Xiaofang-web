import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { consultingExperience, consultingExpertise } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulting Services | Education, Parenting, and Social Science Research",
  description: "Consulting in program evaluation, survey research, training, technical assistance, and social science research.",
};

export default function ConsultingPage() {
  return (
    <>
      <Hero compact eyebrow="Research and strategy" title="Consulting" description="Beyond therapy, Dr. Wang Lanterman provides consulting in education, parenting, and social science research, leveraging expertise in family dynamics, child development, workforce development, survey research, and program evaluation." />
      <Section className="bg-linen">
        <div className="container-page">
          <p className="eyebrow">Areas of expertise</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {consultingExpertise.map((item) => <span key={item} className="rounded-full border border-teal/10 bg-white/70 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-teal shadow-card">{item}</span>)}
          </div>
        </div>
      </Section>
      <Section>
        <div className="container-page">
          <p className="eyebrow">Experience highlights</p>
          <h2 className="mt-4 text-4xl leading-tight text-teal sm:text-5xl">Evidence-informed work across sectors.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {consultingExperience.map((item, index) => <ServiceCard key={item.title} {...item} index={index} />)}
          </div>
        </div>
      </Section>
      <CTA text="Let's talk about the goals of your organization." />
    </>
  );
}
