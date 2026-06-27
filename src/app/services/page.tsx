"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  Eye,
  Heart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Credit Restoration",
    description:
      "Systematic dispute management and credit repair to remove inaccuracies and rebuild your credit profile.",
    bullets: [
      "Comprehensive credit report analysis across all three bureaus",
      "Custom dispute strategy targeting erroneous and unverifiable items",
      "Creditor direct intervention letters and goodwill adjustments",
      "Monthly progress tracking with transparent reporting",
    ],
    href: "/contact",
    id: "credit",
  },
  {
    icon: Scale,
    title: "Debt Negotiation",
    description:
      "Expert negotiation with creditors to reduce balances, lower interest rates, and resolve outstanding debts.",
    bullets: [
      "Professional settlement negotiation with major creditors",
      "Structured debt validation and verification process",
      "Interest rate reduction and payment plan restructuring",
      "Post-settlement credit impact minimization strategy",
    ],
    href: "/contact",
    id: "debt",
  },
  {
    icon: Eye,
    title: "Credit Monitoring",
    description:
      "Real-time credit surveillance with instant alerts and identity theft protection for ongoing peace of mind.",
    bullets: [
      "24/7 tri-bureau credit monitoring with instant alerts",
      "Identity theft insurance and restoration support",
      "Monthly credit score tracking with trend analysis",
      "Dark web surveillance and social security number monitoring",
    ],
    href: "/contact",
    id: "monitoring",
  },
  {
    icon: Heart,
    title: "Financial Wellness",
    description:
      "Holistic financial coaching and education to build lasting habits that sustain your improved credit profile.",
    bullets: [
      "One-on-one financial coaching with certified counselors",
      "Custom budgeting plans aligned with your income and goals",
      "Credit utilization optimization and strategic account management",
      "Homebuyer and small business credit preparation programs",
    ],
    href: "/contact",
    id: "financial",
  },
];

const features = [
  {
    title: "Tri-Bureau Coverage",
    description:
      "We work across Equifax, Experian, and TransUnion simultaneously to ensure consistent improvements across all three credit reports.",
  },
  {
    title: "Proven Methodology",
    description:
      "Our dispute process leverages consumer protection laws including the FCRA, FCBA, and FDCPA to hold creditors and bureaus accountable.",
  },
  {
    title: "Personalized Strategy",
    description:
      "Every client receives a custom credit improvement plan tailored to their unique profile, goals, and timeline.",
  },
  {
    title: "Dedicated Case Manager",
    description:
      "You are assigned a single point of contact who oversees your entire restoration journey and provides regular updates.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Access your progress dashboard anytime to see resolved disputes, score changes, and remaining items in real time.",
  },
  {
    title: "Legal Network Access",
    description:
      "When disputes require escalation, our network of consumer protection attorneys is available to pursue litigation on your behalf.",
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

export default function ServicesPage() {
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
            Our Services
          </h1>
          <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
            NewLeaf Financial combines proven dispute expertise with personalized strategy
            to deliver lasting credit improvement. Every engagement begins with a
            comprehensive audit and a custom action plan built around your goals.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 space-y-20">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            id={service.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent-gold)]/10 border border-[var(--border-subtle)]">
                <service.icon className="w-6 h-6 text-[var(--accent-gold)]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                {service.title}
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 pt-2">
                {service.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shrink-0" />
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-gold)] hover:text-[var(--color-gold-300)] transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="glass rounded-2xl p-8 lg:p-10 border-[var(--border-subtle)]">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)]">
                  What to Expect
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Our {service.title.toLowerCase()} process begins with a thorough
                  assessment of your current situation. We identify every opportunity
                  for improvement, build a prioritized action plan, and execute
                  systematically until your goals are met.
                </p>
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <p className="text-xs text-[var(--text-muted)]">
                    Average timeline: {service.id === "credit" ? "3-6 months" : service.id === "debt" ? "4-8 months" : service.id === "monitoring" ? "Ongoing" : "1-3 months"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              Why Clients Choose NewLeaf
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              Our approach is built on a foundation of expertise, transparency, and
              measurable results. Every feature of our service is designed to move
              your credit forward.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-6 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] transition-all duration-300"
              >
                <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
            Take the first step toward a stronger credit profile. Schedule your free
            consultation and receive a personalized credit improvement plan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-base bg-[var(--accent-gold)] text-[var(--bg-primary)] hover:bg-[var(--color-gold-500)] transition-all duration-200"
            >
              Free Consultation
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-base glass text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
