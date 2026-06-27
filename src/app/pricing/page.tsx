"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: 99,
    description:
      "Essential credit repair for individuals looking to improve their score with targeted dispute management.",
    features: [
      "Tri-bureau credit report analysis",
      "Up to 5 disputes per month",
      "Creditor intervention letters",
      "Monthly progress report",
      "Online client portal access",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Standard",
    price: 199,
    description:
      "Comprehensive credit restoration with faster results and expanded coverage for serious improvement.",
    features: [
      "Everything in Starter",
      "Unlimited disputes per month",
      "Debt validation & negotiation",
      "Goodwill letter campaigns",
      "Bi-weekly progress updates",
      "Dedicated case manager",
      "Priority phone & email support",
      "Credit monitoring setup",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium",
    price: 349,
    description:
      "Complete financial transformation with full-service credit repair, debt negotiation, and financial coaching.",
    features: [
      "Everything in Standard",
      "Advanced creditor negotiations",
      "Legal network access for escalations",
      "Monthly one-on-one financial coaching",
      "Custom budget & savings plan",
      "Identity theft protection suite",
      "24/7 credit monitoring with alerts",
      "Homebuyer readiness program",
      "VIP support with 4-hour response",
    ],
    cta: "Get Started",
    popular: false,
  },
];

const faqs = [
  {
    question: "How long does credit restoration take?",
    answer:
      "Most clients see initial improvements within 45 to 60 days. Significant score improvements typically occur within 3 to 6 months, depending on the complexity of your credit profile and the number of items being disputed. We provide monthly progress reports so you can track every change.",
  },
  {
    question: "Is there a contract or long-term commitment?",
    answer:
      "No. All NewLeaf plans are month-to-month. You can cancel at any time without penalty. We earn your business every month through the results we deliver.",
  },
  {
    question: "Can you guarantee specific results?",
    answer:
      "Credit restoration outcomes depend on many factors including the accuracy of reported items, creditor responsiveness, and your overall credit profile. We cannot guarantee specific score increases, but we guarantee to work diligently on your behalf and provide transparent reporting throughout the process. Our 98% client satisfaction rate speaks for itself.",
  },
  {
    question: "Will disputing items hurt my credit?",
    answer:
      "No. Filing disputes does not negatively impact your credit score. In fact, the Fair Credit Reporting Act gives you the right to dispute inaccurate information, and the credit bureaus are required to investigate. When negative items are removed as a result of successful disputes, your score typically improves.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes. If you are not satisfied with our service within the first 30 days, we will refund your initial payment. We stand behind the quality of our work and want you to feel confident in your decision to work with NewLeaf.",
  },
  {
    question: "Can I switch plans after signing up?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. If you upgrade, the new features are available immediately. We recommend starting with the plan that matches your current needs and scaling up as your goals evolve.",
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

export default function PricingPage() {
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
            Transparent Pricing
          </h1>
          <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
            Simple, straightforward pricing with no hidden fees. Every plan includes
            a free initial consultation and credit audit to identify the right
            strategy for your situation.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass rounded-2xl p-6 lg:p-8 flex flex-col ${
                tier.popular
                  ? "border-[var(--accent-gold)]/40 ring-1 ring-[var(--accent-gold)]/20"
                  : "border-[var(--border-subtle)]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-[var(--accent-gold)] text-[var(--bg-primary)]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="font-serif text-4xl font-bold text-[var(--text-primary)]">
                  ${tier.price}
                </span>
                <span className="text-[var(--text-muted)] text-sm">/month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[var(--accent-gold)] mt-0.5 shrink-0" />
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  tier.popular
                    ? "bg-[var(--accent-gold)] text-[var(--bg-primary)] hover:bg-[var(--color-gold-500)]"
                    : "glass text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)]"
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 text-center"
        >
          <div className="glass inline-flex items-center gap-3 rounded-xl px-5 py-3">
            <div className="w-8 h-8 rounded-full bg-[var(--accent-green)]/15 flex items-center justify-center">
              <Check className="w-4 h-4 text-[var(--accent-green)]" />
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              <span className="font-semibold text-[var(--text-primary)]">30-day money-back guarantee</span>
              {" "}on all plans. No questions asked.
            </p>
          </div>
        </motion.div>
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
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              Answers to the most common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-5 lg:p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[var(--accent-gold)] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
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
            Not Sure Which Plan is Right?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
            Schedule a free consultation and we will review your credit report,
            discuss your goals, and recommend the plan that fits your needs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-base bg-[var(--accent-gold)] text-[var(--bg-primary)] hover:bg-[var(--color-gold-500)] transition-all duration-200"
            >
              Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
