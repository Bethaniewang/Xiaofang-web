"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" id="first-name" />
        <Field label="Last name" id="last-name" />
        <Field label="Phone" id="phone" type="tel" />
        <Field label="Email" id="email" type="email" />
      </div>
      <label htmlFor="message" className="mt-5 block text-sm font-bold text-teal">
        Message
      </label>
      <textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded-xl border border-teal/20 bg-cream px-4 py-3 outline-none focus:border-teal focus:ring-2 focus:ring-teal/20" />
      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-ink/80">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-teal" />
        <span>Yes, I want to submit this form.</span>
      </label>
      <p className="mt-4 text-xs leading-5 text-ink/65">
        By submitting this form via this web portal, you acknowledge and accept
        the risks of communicating health information via unencrypted email and
        electronic messaging and wish to continue despite those risks.
      </p>
      <button type="submit" className="button-primary mt-6">Submit</button>
      {submitted && (
        <p className="mt-5 rounded-xl bg-sage/40 p-4 text-sm leading-6 text-teal" role="status">
          Thank you. This demo form is not connected yet. Please use the booking
          link, phone, or email to contact us.
        </p>
      )}
    </form>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-teal">{label}</label>
      <input id={id} name={id} type={type} required className="mt-2 w-full rounded-xl border border-teal/20 bg-cream px-4 py-3 outline-none focus:border-teal focus:ring-2 focus:ring-teal/20" />
    </div>
  );
}
