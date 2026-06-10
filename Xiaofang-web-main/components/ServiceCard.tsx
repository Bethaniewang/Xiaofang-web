import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
  index?: number;
};

export function ServiceCard({ title, description, href, index }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-teal/10 bg-white/70 p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft sm:p-8">
      {index !== undefined && (
        <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-teal/10 bg-sand/70 text-[0.68rem] font-bold tracking-[0.12em] text-teal">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <h3 className="text-2xl leading-snug text-teal">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-ink/70">{description}</p>
      {href && (
        <Link href={href} className="mt-7 text-xs font-bold uppercase tracking-[0.12em] text-terracotta transition group-hover:text-teal">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      )}
    </article>
  );
}
