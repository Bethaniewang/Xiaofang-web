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
            <article key={post.title} className="rounded-3xl bg-white p-7 shadow-soft">
              <time className="eyebrow">{post.date}</time>
              <h2 className="mt-4 text-xl font-bold leading-snug text-teal">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/75">{post.excerpt}</p>
              <span className="mt-6 block text-sm font-bold text-terracotta" aria-disabled="true">Read more <span aria-hidden="true">→</span></span>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
