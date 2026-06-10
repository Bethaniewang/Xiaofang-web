type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="group rounded-2xl border border-teal/10 bg-white/70 p-5 shadow-card transition open:bg-white sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-teal">
            {item.question}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand text-xl transition group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="pt-4 text-sm leading-7 text-ink/75">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
