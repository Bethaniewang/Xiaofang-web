import { ReactNode } from "react";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description: string;
  actions?: ReactNode;
  compact?: boolean;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  description,
  actions,
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden border-b border-teal/5 bg-linen ${compact ? "py-20 sm:py-24" : "py-24 sm:py-32 lg:py-36"}`}>
      <div className="absolute -right-24 -top-36 h-[28rem] w-[28rem] rounded-full border border-teal/10 bg-sage/35" />
      <div className="absolute -bottom-36 right-1/4 h-72 w-72 rounded-full border border-white/45 bg-sand/80" />
      <div className="absolute -left-28 bottom-8 h-56 w-56 rounded-full border border-teal/10" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-5 text-5xl leading-[1.06] text-teal sm:text-6xl lg:text-7xl">{title}</h1>
          {subtitle && <p className="mt-6 font-serif text-2xl italic text-terracotta sm:text-3xl">{subtitle}</p>}
          <p className="mt-7 max-w-2xl text-base leading-8 text-ink/75 sm:text-lg sm:leading-9">{description}</p>
          {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
