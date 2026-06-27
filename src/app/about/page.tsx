"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Lightbulb, TrendingUp, HeartHandshake, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe every client deserves to understand exactly what is happening with their credit. Our reporting is clear, our pricing is straightforward, and our communication is honest.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Credit restoration is evolving. We invest in technology, data analysis, and process automation to deliver faster, more consistent results than traditional repair agencies.",
  },
  {
    icon: TrendingUp,
    title: "Results",
    description:
      "Everything we do is measured. From dispute success rates to average score improvements, we hold ourselves accountable to the outcomes our clients experience.",
  },
  {
    icon: HeartHandshake,
    title: "Empathy",
    description:
      "Behind every credit report is a person with real goals. Whether buying a home, starting a business, or rebuilding after hardship, we treat every client with respect and understanding.",
  },
];

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "15,000+", label: "Clients Helped" },
  { value: "45+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function AboutPage() {
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
            About NewLeaf Financial
          </h1>
          <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
            We are a team of credit specialists, consumer advocates, and financial
            educators committed to helping Americans take control of their credit and
            build the future they deserve.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
            Our Mission
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            NewLeaf Financial was founded on a simple belief: everyone deserves access
            to fair and accurate credit. The credit reporting ecosystem is complex,
            often opaque, and disproportionately affects those who can least afford to
            navigate it alone.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Our mission is to level the playing field. We combine deep expertise in
            consumer protection law, advanced data analysis, and personalized coaching
            to help our clients challenge inaccuracies, negotiate with creditors, and
            build sustainable financial habits.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            We measure our success not by the number of disputes we file, but by the
            lives we change. Every point improvement on a credit report represents a
            lower mortgage rate, an approved rental application, a business loan
            funded, or a family moving closer to their dream.
          </p>
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
              Our Values
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              These principles guide every decision we make and every client
              relationship we build.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 lg:p-8 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[var(--accent-gold)]/10 border border-[var(--border-subtle)] mb-4">
                  <value.icon className="w-5 h-5 text-[var(--accent-gold)]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {value.description}
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight text-center mb-10">
            Our Story
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              NewLeaf Financial began in 2013 when our founder, a consumer protection
              attorney, noticed a pattern: hardworking individuals were being denied
              mortgages, auto loans, and rental applications not because of their
              actual creditworthiness, but because of errors and outdated information
              on their credit reports.
            </p>
            <p>
              What started as a one-person operation helping a handful of clients has
              grown into a full-service credit restoration firm with over 45 team
              members across credit specialists, negotiators, data analysts, and
              financial coaches. We have helped over 15,000 Americans challenge more
              than 2.4 million negative items and achieve an average score improvement
              of 85 points.
            </p>
            <p>
              Today, NewLeaf operates in all 50 states and continues to invest in the
              technology, talent, and partnerships needed to deliver the best outcomes
              for our clients. Our approach has been refined through thousands of
              cases, hundreds of thousands of disputes, and a relentless commitment to
              understanding the ever-evolving credit reporting landscape.
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-gradient-gold tracking-tight">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
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
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
            Learn what NewLeaf Financial can do for your credit. Schedule a free,
            no-obligation consultation with one of our credit specialists.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-base bg-[var(--accent-gold)] text-[var(--bg-primary)] hover:bg-[var(--color-gold-500)] transition-all duration-200"
            >
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
