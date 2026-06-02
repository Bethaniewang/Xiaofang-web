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
    <section className={`relative overflow-hidden bg-linen ${compact ? "py-16 sm:py-20" : "py-20 sm:py-28"}`}>
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-sage/55" />
      <div className="absolute -bottom-28 right-1/4 h-56 w-56 rounded-full bg-sand" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl font-bold leading-tight text-teal sm:text-5xl lg:text-6xl">{title}</h1>
          {subtitle && <p className="mt-5 text-2xl font-medium text-terracotta sm:text-3xl">{subtitle}</p>}
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/80 sm:text-lg">{description}</p>
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
