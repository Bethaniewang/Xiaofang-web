import { BookingButton } from "./BookingButton";

type CTAProps = {
  text: string;
  buttonLabel?: string;
};

export function CTA({ text, buttonLabel }: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-sand py-20">
      <div className="absolute -right-24 -top-28 h-64 w-64 rounded-full border border-teal/10 bg-cream/35" />
      <div className="container-page relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
        <h2 className="max-w-2xl text-4xl leading-tight text-teal sm:text-5xl">{text}</h2>
        <BookingButton label={buttonLabel} />
      </div>
    </section>
  );
}
