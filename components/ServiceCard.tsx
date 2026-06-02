import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
  index?: number;
};

export function ServiceCard({ title, description, href, index }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-soft">
      {index !== undefined && (
        <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-sand text-sm font-bold text-teal">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <h3 className="text-xl font-bold leading-snug text-teal">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-ink/75">{description}</p>
      {href && (
        <Link href={href} className="mt-6 text-sm font-bold text-terracotta hover:text-teal">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      )}
    </article>
  );
}
