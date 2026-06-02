type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-2xl bg-white p-5 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-teal">
            {item.question}
            <span className="text-xl transition group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="pt-4 text-sm leading-7 text-ink/75">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
