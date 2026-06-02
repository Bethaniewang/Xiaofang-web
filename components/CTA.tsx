import { BookingButton } from "./BookingButton";

type CTAProps = {
  text: string;
  buttonLabel?: string;
};

export function CTA({ text, buttonLabel }: CTAProps) {
  return (
    <section className="bg-sand py-16">
      <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <h2 className="max-w-2xl text-3xl font-bold leading-tight text-teal sm:text-4xl">{text}</h2>
        <BookingButton label={buttonLabel} />
      </div>
    </section>
  );
}
