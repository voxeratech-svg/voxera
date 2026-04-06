"use client";

import { useState } from "react";

interface ContactDict {
  label: string;
  title: string;
  subtitle: string;
  emailLabel: string;
  locationLabel: string;
  locationValue: string;
  hoursLabel: string;
  hoursValue: string;
  formName: string;
  formEmail: string;
  formSubject: string;
  formMessage: string;
  formNamePlaceholder: string;
  formEmailPlaceholder: string;
  formSubjectPlaceholder: string;
  formMessagePlaceholder: string;
  sending: string;
  sent: string;
  error: string;
  submit: string;
}

export default function Contact({ dict }: { dict: ContactDict }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">
            {dict.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {dict.title}
          </h2>
          <div className="w-20 h-1 bg-primary/50 mx-auto mt-4 rounded-full" />
          <p className="text-foreground/50 mt-6 max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-xl bg-surface border border-border gradient-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{dict.emailLabel}</h4>
                  <a
                    href="mailto:voxeratech@gmail.com"
                    className="text-foreground/50 text-sm hover:text-primary transition-colors"
                  >
                    voxeratech@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border gradient-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{dict.locationLabel}</h4>
                  <p className="text-foreground/50 text-sm">{dict.locationValue}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-border gradient-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{dict.hoursLabel}</h4>
                  <p className="text-foreground/50 text-sm">{dict.hoursValue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-xl bg-surface border border-border gradient-border space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">
                    {dict.formName}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder={dict.formNamePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">
                    {dict.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder={dict.formEmailPlaceholder}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-foreground/70 mb-2">
                  {dict.formSubject}
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder={dict.formSubjectPlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm text-foreground/70 mb-2">
                  {dict.formMessage}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder={dict.formMessagePlaceholder}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-light transition-all glow hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? dict.sending
                  : status === "sent"
                  ? dict.sent
                  : status === "error"
                  ? dict.error
                  : dict.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
