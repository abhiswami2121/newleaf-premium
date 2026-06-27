"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUp } from "lucide-react";

const results = [
  { before: 580, after: 702, months: 6, label: "Client A — 6 months" },
  { before: 620, after: 744, months: 5, label: "Client B — 5 months" },
  { before: 550, after: 668, months: 7, label: "Client C — 7 months" },
  { before: 600, after: 712, months: 4, label: "Client D — 4 months" },
];

const testimonials = [
  {
    quote:
      "NewLeaf helped me remove 12 negative items from my credit report in just 4 months. My score went from 600 to 712 and I qualified for a mortgage at a rate I never thought possible.",
    author: "Michael R.",
    location: "Atlanta, GA",
  },
  {
    quote:
      "After going through a divorce, my credit was in shambles. The team at NewLeaf not only helped clean up my report but also taught me how to manage my finances going forward.",
    author: "Jennifer S.",
    location: "Phoenix, AZ",
  },
  {
    quote:
      "I was skeptical about credit repair services, but NewLeaf proved me wrong. They were transparent throughout the process and delivered exactly what they promised. My score is up 124 points.",
    author: "David K.",
    location: "Denver, CO",
  },
  {
    quote:
      "The debt negotiation team saved me over $15,000 in settlements. Combined with the credit restoration work, I am now debt-free and my credit score has never been higher.",
    author: "Sarah M.",
    location: "Portland, OR",
  },
  {
    quote:
      "What sets NewLeaf apart is their education focus. They didn't just fix my credit; they gave me the tools to keep it healthy. The financial coaching was worth every penny.",
    author: "Robert T.",
    location: "Austin, TX",
  },
  {
    quote:
      "Three years ago I couldn't get approved for a car loan. Today, thanks to NewLeaf, I am closing on my first home. This service changed my family's financial trajectory.",
    author: "Lisa W.",
    location: "Chicago, IL",
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

function ScoreCard({
  before,
  after,
  months,
  label,
  index,
}: {
  before: number;
  after: number;
  months: number;
  label: string;
  index: number;
}) {
  const improvement = after - before;
  const pct = (improvement / before) * 100;
  const barWidth = Math.min((after / 850) * 100, 100);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1 }}
      className="glass rounded-xl p-6 lg:p-8 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-base font-semibold text-[var(--text-primary)]">
          {label}
        </h3>
        <div className="flex items-center gap-1.5 text-[var(--accent-green)]">
          <ArrowUp className="w-4 h-4" />
          <span className="text-sm font-semibold">+{improvement}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs text-[var(--text-muted)] mb-1">
            <span>Before: {before}</span>
            <span>After: {after}</span>
          </div>
          <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${barWidth}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" as const, delay: 0.3 }}
              className="h-full rounded-full bg-gradient-to-r from-[var(--accent-amber)] to-[var(--accent-gold)]"
            />
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-[var(--text-muted)]">
            Improvement: {pct.toFixed(1)}%
          </span>
          <span className="text-[var(--text-muted)]">{months} months</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ResultsPage() {
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
            Real Results
          </h1>
          <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
            Credit improvement is measurable, and our track record speaks for itself.
            Every number below represents real clients who took control of their
            financial future with NewLeaf Financial.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="glass rounded-xl p-6 text-center">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gradient-gold tracking-tight">
              15,000+
            </div>
            <p className="mt-2 text-xs text-[var(--text-muted)]">Clients Served</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gradient-gold tracking-tight">
              2.4M+
            </div>
            <p className="mt-2 text-xs text-[var(--text-muted)]">Items Challenged</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gradient-gold tracking-tight">
              98%
            </div>
            <p className="mt-2 text-xs text-[var(--text-muted)]">Success Rate</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gradient-gold tracking-tight">
              85+
            </div>
            <p className="mt-2 text-xs text-[var(--text-muted)]">Avg Score Gain</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] tracking-tight">
            Before and After
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
            Real credit score improvements from verified NewLeaf clients. Average
            improvement of 118 points across these cases.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {results.map((result, i) => (
            <ScoreCard key={i} index={i} {...result} />
          ))}
        </div>
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
              Client Stories
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              The people behind the numbers. Real clients who trusted NewLeaf with
              their financial futures.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-xl p-5 lg:p-6 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] transition-all duration-300"
              >
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic mb-4">
                  {t.quote}
                </p>
                <footer>
                  <div className="h-px bg-[var(--border-subtle)] mb-3" />
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    {t.author}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {t.location}
                  </p>
                </footer>
              </motion.blockquote>
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
            Ready to See Your Results?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
            Join over 15,000 clients who have taken control of their credit.
            Your story starts with a free consultation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-base bg-[var(--accent-gold)] text-[var(--bg-primary)] hover:bg-[var(--color-gold-500)] transition-all duration-200"
            >
              Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-base glass text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] transition-all duration-200"
            >
              View Plans
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
