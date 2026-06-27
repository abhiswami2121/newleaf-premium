"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, ChevronRight } from "lucide-react";

const posts = [
  {
    slug: "understanding-credit-score-factors",
    title: "The Five Factors That Determine Your Credit Score",
    excerpt:
      "Your FICO score is calculated using five key factors. Understanding how each one is weighted can help you make smarter decisions about your credit.",
    date: "June 15, 2026",
    readTime: "6 min read",
    category: "Credit Education",
  },
  {
    slug: "disputing-credit-report-errors",
    title: "How to Dispute Credit Report Errors and Win",
    excerpt:
      "Errors on credit reports are more common than you think. Here is a step-by-step guide to identifying inaccuracies and successfully disputing them with the credit bureaus.",
    date: "June 8, 2026",
    readTime: "8 min read",
    category: "Credit Repair",
  },
  {
    slug: "debt-to-income-ratio-guide",
    title: "Debt-to-Income Ratio: Why It Matters and How to Improve Yours",
    excerpt:
      "Lenders look at your DTI ratio as closely as your credit score. Learn what constitutes a healthy ratio and practical strategies to reduce yours.",
    date: "May 28, 2026",
    readTime: "5 min read",
    category: "Credit Education",
  },
  {
    slug: "credit-after-bankruptcy",
    title: "Rebuilding Credit After Bankruptcy: A Practical Timeline",
    excerpt:
      "Bankruptcy does not have to define your financial future. With a strategic approach, you can rebuild your credit faster than you might expect.",
    date: "May 20, 2026",
    readTime: "7 min read",
    category: "Credit Repair",
  },
  {
    slug: "authorized-user-strategy",
    title: "The Authorized User Strategy: Does It Still Work in 2026?",
    excerpt:
      "Adding yourself as an authorized user on someone else's credit card can give your score a boost. But the rules have changed. Here is what you need to know.",
    date: "May 12, 2026",
    readTime: "5 min read",
    category: "Credit Building",
  },
  {
    slug: "mortgage-credit-requirements",
    title: "Credit Score Requirements for Mortgages in 2026",
    excerpt:
      "Planning to buy a home? The minimum credit score requirements vary by loan type. We break down what you need for conventional, FHA, VA, and USDA loans.",
    date: "May 5, 2026",
    readTime: "6 min read",
    category: "Homebuying",
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

export default function BlogPage() {
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
            Credit Insights
          </h1>
          <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed">
            Expert guidance, actionable strategies, and the latest information on
            credit restoration, debt management, and financial wellness from the
            NewLeaf Financial team.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-6 lg:p-8 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] border border-[var(--accent-gold)]/15">
                  {post.category}
                </span>
              </div>
              <h2 className="font-serif text-xl lg:text-2xl font-bold text-[var(--text-primary)] tracking-tight leading-tight mb-3 group-hover:text-[var(--accent-gold)] transition-colors duration-200">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                  <span>{post.date}</span>
                  <span className="text-[var(--border-default)]">|</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-gold)] hover:text-[var(--color-gold-300)] transition-colors"
                >
                  Read More
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
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
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              Ready to Apply What You Have Learned?
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              Knowledge is the first step. Let NewLeaf Financial help you put it
              into action with a personalized credit improvement plan.
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
        </div>
      </section>
    </div>
  );
}
