"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(888) 555-0123",
    detail: "Mon-Fri 8am-8pm EST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@newleaffinancial.com",
    detail: "We respond within 4 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "200 Liberty Street, Suite 1400",
    detail: "New York, NY 10281",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday - Friday",
    detail: "8:00 AM - 8:00 PM EST",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-20 lg:pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">
            Get in Touch
          </h1>
          <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
            Ready to take control of your credit? Fill out the form below and one of
            our credit specialists will reach out within one business day to schedule
            your free consultation.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass rounded-2xl p-8 lg:p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--accent-green)]/15 flex items-center justify-center mx-auto mb-5">
                  <Send className="w-6 h-6 text-[var(--accent-green)]" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Message Received
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  Thank you for reaching out. A credit specialist will review your
                  information and contact you within one business day to schedule your
                  free consultation.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="text-sm font-semibold text-[var(--accent-gold)] hover:text-[var(--color-gold-300)] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 lg:p-10 space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--text-primary)] mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)]/50 px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)]/30 transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--text-primary)] mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)]/50 px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)]/30 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[var(--text-primary)] mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)]/50 px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)]/30 transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--text-primary)] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)]/50 px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-1 focus:ring-[var(--accent-gold)]/30 transition-colors resize-none"
                    placeholder="Tell us about your credit situation and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-base bg-[var(--accent-gold)] text-[var(--bg-primary)] hover:bg-[var(--color-gold-500)] transition-all duration-200"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 lg:p-8 space-y-5">
              <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)]">
                Contact Information
              </h3>
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--accent-gold)]/10 border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-[var(--accent-gold)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {item.label}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mt-0.5">
                      {item.value}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6 lg:p-8">
              <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)] mb-3">
                Office Location
              </h3>
              <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)]/30 h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[var(--accent-gold)]/50 mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)]">
                    200 Liberty Street
                    <br />
                    New York, NY 10281
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 lg:p-8">
              <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)] mb-3">
                Your First Consultation is Free
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                During your free 30-minute consultation, we will review your credit
                report, identify areas for improvement, and outline a personalized
                action plan.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-gold)] hover:text-[var(--color-gold-300)] transition-colors"
              >
                View pricing plans
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              Prefer to Call?
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              Our credit specialists are available Monday through Friday, 8 AM to
              8 PM EST. We are here to answer your questions and guide you toward
              the right solution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+18885550123"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-base bg-[var(--accent-gold)] text-[var(--bg-primary)] hover:bg-[var(--color-gold-500)] transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                (888) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
