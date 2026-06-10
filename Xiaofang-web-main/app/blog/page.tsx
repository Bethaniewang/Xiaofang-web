import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | Side By Side Counseling & Consulting",
  description: "Insights on bilingual counseling, immigration evaluations, relationships, and consulting.",
};

export default function BlogPage() {
  return (
    <>
      <Hero compact eyebrow="Resources" title="Blog" description="Thoughtful perspectives on immigration evaluations, relationships, family well-being, and culturally responsive support." />
      <Section>
        <div className="container-page grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-[1.75rem] border border-teal/10 bg-white/70 p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft sm:p-8">
              <time className="eyebrow">{post.date}</time>
              <h2 className="mt-5 text-2xl leading-snug text-teal">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/70">{post.excerpt}</p>
              <span className="mt-7 block text-xs font-bold uppercase tracking-[0.12em] text-terracotta" aria-disabled="true">Read more <span aria-hidden="true">→</span></span>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
