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
        <div className="container-page grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-5 text-base leading-8 text-ink/80">
            <p>Hi, I&apos;m Dr. Xiaofang (Bethanie) Wang Lanterman. I hold a PhD in Family Science, a master&apos;s degree in Couples and Family Therapy, a master&apos;s degree in Parenting Education, and advanced training in immigration mental health evaluations.</p>
            <p>With over a decade of experience, I offer therapy, immigration mental health evaluations, and consulting services to individuals, couples, families, and organizations.</p>
            <p>As an immigrant myself, I understand the challenges of cultural transitions and offer bilingual care and services in both English and Mandarin.</p>
          </div>
          <aside className="rounded-3xl bg-sand p-7">
            <h2 className="text-xl font-bold text-teal">Licensed in</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6">
              {site.licenses.map((license) => <li key={license}>✓ {license}</li>)}
            </ul>
          </aside>
        </div>
      </Section>
      <Section className="bg-linen">
        <div className="container-page">
          <p className="eyebrow">Areas of work</p>
          <h2 className="mt-3 text-3xl font-bold text-teal">Care and expertise for every next step.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => <div key={area} className="rounded-2xl bg-white p-5 font-bold text-teal shadow-sm">{area}</div>)}
          </div>
        </div>
      </Section>
      <CTA text="Let's talk about your next step together." />
    </>
  );
}
