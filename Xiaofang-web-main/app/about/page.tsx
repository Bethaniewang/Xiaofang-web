import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Dr. Xiaofang Wang Lanterman | Side By Side Counseling & Consulting",
  description: "Learn about Dr. Xiaofang Wang Lanterman's bilingual therapy, immigration evaluation, and consulting experience.",
};

export default function AboutPage() {
  const areas = ["Immigration clients", "Therapy clients", "Education and social science research clients", "Parenting and family support"];
  return (
    <>
      <Hero compact eyebrow="About us" title={`About ${site.provider}`} subtitle="Licensed clinical marriage and family therapist" description="Warm, culturally sensitive care informed by professional expertise and lived immigrant experience." />
      <Section>
        <div className="container-page grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div className="space-y-6 text-base leading-8 text-ink/75">
            <p>Hi, I&apos;m Dr. Xiaofang (Bethanie) Wang Lanterman. I hold a PhD in Family Science, a master&apos;s degree in Couples and Family Therapy, a master&apos;s degree in Parenting Education, and advanced training in immigration mental health evaluations.</p>
            <p>With over a decade of experience, I offer therapy, immigration mental health evaluations, and consulting services to individuals, couples, families, and organizations.</p>
            <p>As an immigrant myself, I understand the challenges of cultural transitions and offer bilingual care and services in both English and Mandarin.</p>
          </div>
          <aside className="rounded-[1.75rem] border border-teal/10 bg-sand/70 p-8 shadow-card">
            <h2 className="text-3xl text-teal">Licensed in</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/75">
              {site.licenses.map((license) => <li key={license}>✓ {license}</li>)}
            </ul>
          </aside>
        </div>
      </Section>
      <Section className="bg-linen">
        <div className="container-page">
          <p className="eyebrow">Areas of work</p>
          <h2 className="mt-4 text-4xl leading-tight text-teal sm:text-5xl">Care and expertise for every next step.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => <div key={area} className="rounded-2xl border border-teal/10 bg-white/70 p-6 font-serif text-xl leading-snug text-teal shadow-card">{area}</div>)}
          </div>
        </div>
      </Section>
      <CTA text="Let's talk about your next step together." />
    </>
  );
}
