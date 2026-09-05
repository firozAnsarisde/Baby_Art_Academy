"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      // Wire this up to your email service, form backend, or API route.
      // Example once you have an endpoint:
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-mehndi-100 bg-mehndi-50 p-6 text-center">
        <p className="font-display text-lg text-mehndi-800">Message sent</p>
        <p className="mt-2 font-body text-[14.5px] text-charcoal-light">
          Thank you for reaching out. We'll get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <label htmlFor="name" className="font-body text-[13.5px] font-medium text-charcoal">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-mehndi-100 bg-ivory px-4 py-3 font-body text-[15px] text-charcoal outline-none focus:border-mehndi-500"
          placeholder="Your full name"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="font-body text-[13.5px] font-medium text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-mehndi-100 bg-ivory px-4 py-3 font-body text-[15px] text-charcoal outline-none focus:border-mehndi-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="font-body text-[13.5px] font-medium text-charcoal">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-mehndi-100 bg-ivory px-4 py-3 font-body text-[15px] text-charcoal outline-none focus:border-mehndi-500"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-body text-[13.5px] font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-mehndi-100 bg-ivory px-4 py-3 font-body text-[15px] text-charcoal outline-none focus:border-mehndi-500"
          placeholder="Tell us what you'd like to know"
        />
      </div>

      {status === "error" && (
        <p className="font-body text-[14px] text-terracotta-600">
          Something went wrong. Please try again or reach us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-mehndi-700 px-6 py-3 font-body text-[15px] font-medium text-ivory transition-colors hover:bg-mehndi-800 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
