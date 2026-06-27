"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ChevronRight, ArrowRight } from "lucide-react";

const blogPosts: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    category: string;
    content: {
      heading: string;
      body: string;
    }[];
  }
> = {
  "understanding-credit-score-factors": {
    title: "The Five Factors That Determine Your Credit Score",
    date: "June 15, 2026",
    readTime: "6 min read",
    category: "Credit Education",
    content: [
      {
        heading: "What Makes Up Your Credit Score",
        body: "Your FICO credit score, the number most lenders use to evaluate your creditworthiness, is calculated using five distinct factors. Each factor carries a different weight, and understanding this breakdown is essential for anyone looking to improve their credit profile strategically.",
      },
      {
        heading: "Payment History (35%)",
        body: "Payment history is the single most important factor in your credit score. Lenders want to know that you pay your obligations on time. A single late payment can drop your score by as much as 100 points, and the impact can last for up to seven years. Setting up automatic payments or calendar reminders can help protect this critical component of your score. If you do have late payments on your report, our credit restoration team can help determine whether any are eligible for goodwill adjustments or accuracy challenges.",
      },
      {
        heading: "Amounts Owed (30%)",
        body: "This factor, often referred to as credit utilization, measures how much of your available credit you are using. The rule of thumb is to keep your utilization below 30% across all accounts, and ideally below 10% on individual cards. High utilization signals to lenders that you may be overextended, even if you pay your bills on time. Paying down balances, requesting credit limit increases, and keeping old accounts open can all help improve this metric.",
      },
      {
        heading: "Length of Credit History (15%)",
        body: "The age of your oldest account, the age of your newest account, and the average age of all your accounts all factor into this component. A longer credit history generally indicates more experience managing credit. This is why closing old accounts can actually hurt your score. If you are new to credit, becoming an authorized user on a family member's long-standing account can help establish a longer history.",
      },
      {
        heading: "Credit Mix (10%)",
        body: "Lenders like to see that you can manage different types of credit responsibly. A healthy mix might include revolving accounts like credit cards and installment loans like auto loans or mortgages. You do not need to take on debt just to improve your credit mix, but understanding this factor can inform your decisions when you do need to borrow.",
      },
      {
        heading: "New Credit (10%)",
        body: "Each time you apply for new credit, a hard inquiry appears on your report, which can temporarily lower your score. Multiple inquiries in a short period can signal risk to lenders. There are exceptions: rate shopping for mortgages, auto loans, and student loans within a focused window of 14 to 45 days typically counts as a single inquiry for scoring purposes. Be strategic about when and why you apply for new credit.",
      },
    ],
  },
  "disputing-credit-report-errors": {
    title: "How to Dispute Credit Report Errors and Win",
    date: "June 8, 2026",
    readTime: "8 min read",
    category: "Credit Repair",
    content: [
      {
        heading: "Why Errors Appear on Credit Reports",
        body: "Credit report errors are surprisingly common. A study by the Federal Trade Commission found that one in five consumers had an error on at least one of their credit reports. Errors can occur due to mixed files where information from someone with a similar name appears on your report, identity theft, clerical mistakes by creditors, or outdated information that should have been removed. Identifying these errors is the first step toward correcting your credit profile.",
      },
      {
        heading: "Obtaining and Reviewing Your Reports",
        body: "Federal law entitles you to a free copy of your credit report from each of the three major bureaus every 12 months through AnnualCreditReport.com. Review each report carefully, looking for accounts you do not recognize, incorrect balances, duplicate entries, outdated negative items, and personal information errors. At NewLeaf, we conduct a comprehensive tri-bureau audit as the foundation of every client engagement.",
      },
      {
        heading: "Crafting an Effective Dispute Letter",
        body: "A successful dispute letter is specific, factual, and supported by evidence. Identify each error clearly, explain why the information is inaccurate, and include copies of supporting documentation such as payment records, correspondence with creditors, or identity verification documents. The credit bureaus are required by the Fair Credit Reporting Act to investigate your dispute within 30 days and to correct or remove any information that cannot be verified.",
      },
      {
        heading: "What Happens After You File",
        body: "Once the credit bureau receives your dispute, they must forward the relevant information to the creditor or data furnisher that reported it. The furnisher must then investigate and report back. If the furnisher cannot verify the information, the bureau must remove it from your report. If the dispute is resolved in your favor, monitor your report to ensure the correction is reflected on all three bureaus, as they do not automatically share corrections with each other.",
      },
    ],
  },
  "debt-to-income-ratio-guide": {
    title: "Debt-to-Income Ratio: Why It Matters and How to Improve Yours",
    date: "May 28, 2026",
    readTime: "5 min read",
    category: "Credit Education",
    content: [
      {
        heading: "What Is Debt-to-Income Ratio",
        body: "Your debt-to-income ratio, or DTI, is the percentage of your monthly gross income that goes toward paying debts. Lenders use this metric alongside your credit score to assess your ability to manage additional debt. There are two types: front-end DTI, which considers only housing costs, and back-end DTI, which includes all monthly debt obligations. Most lenders focus on back-end DTI.",
      },
      {
        heading: "DTI Thresholds by Loan Type",
        body: "For conventional mortgages, most lenders prefer a DTI below 36% with the mortgage payment representing no more than 28% of income. FHA loans may allow DTI up to 43% or, in some cases, 50% with strong compensating factors. VA loans have no hard DTI cap but typically look for ratios below 41%. A DTI above 50% will make it very difficult to qualify for most types of credit.",
      },
      {
        heading: "Strategies to Lower Your DTI",
        body: "You can improve your DTI by increasing income, reducing debt, or both. Paying down high-interest credit cards has a compounding benefit because it reduces both your DTI and your credit utilization. Consider debt consolidation if you have multiple high-rate accounts. Increasing income through a side business, freelance work, or a career change also directly improves your ratio. Even small reductions in monthly obligations can make a meaningful difference in your borrowing capacity.",
      },
    ],
  },
  "credit-after-bankruptcy": {
    title: "Rebuilding Credit After Bankruptcy: A Practical Timeline",
    date: "May 20, 2026",
    readTime: "7 min read",
    category: "Credit Repair",
    content: [
      {
        heading: "The Immediate Aftermath",
        body: "Filing for bankruptcy is a significant financial event, but it is not the end of your credit journey. A Chapter 7 bankruptcy remains on your credit report for 10 years, while Chapter 13 stays for 7 years. However, the impact on your credit score diminishes over time, especially if you take proactive steps to rebuild. The first 30 to 90 days after discharge are critical for establishing new positive credit habits.",
      },
      {
        heading: "Secured Credit Cards and Credit-Builder Loans",
        body: "A secured credit card requires a cash deposit that serves as your credit limit. These cards are designed for people rebuilding credit and report to all three bureaus. Use the card for small, regular purchases and pay the balance in full each month. Similarly, credit-builder loans from credit unions hold the loan amount in a savings account while you make payments, building positive payment history without requiring a credit check.",
      },
      {
        heading: "The 12-Month Milestone",
        body: "After 12 months of consistent on-time payments, many clients see significant score improvements. At this stage, you may qualify for an unsecured credit card with a modest limit. Continue to keep utilization low and avoid applying for multiple accounts in a short period. Our financial wellness coaches work with clients to set realistic milestones and celebrate progress along the way.",
      },
    ],
  },
  "authorized-user-strategy": {
    title: "The Authorized User Strategy: Does It Still Work in 2026?",
    date: "May 12, 2026",
    readTime: "5 min read",
    category: "Credit Building",
    content: [
      {
        heading: "How Authorized User Accounts Work",
        body: "When you are added as an authorized user on someone else's credit card, the account history for that card may appear on your credit report. If the primary account holder has a long history of on-time payments and low utilization, this can provide a meaningful boost to your score. This strategy is particularly effective for young adults establishing credit for the first time or individuals rebuilding after financial setbacks.",
      },
      {
        heading: "Changes in Scoring Models",
        body: "In previous years, the authorized user strategy was sometimes abused through tradeline rental services where individuals would pay to be added to accounts held by strangers with excellent credit. FICO responded by updating its scoring models to reduce the impact of these arrangements. FICO 8 and later versions still count authorized user accounts but include safeguards against abuse. VantageScore takes a similar approach. The strategy still works when the authorized user has a genuine relationship with the primary account holder.",
      },
      {
        heading: "Best Practices for Authorized Users",
        body: "Choose an account with a long, clean history and low utilization. The primary account holder should be someone you trust and who manages their credit responsibly. You do not need to have access to the physical card or actually use the account to benefit. Monitor your credit report to confirm the account is being reported and that the information is accurate. This should be one component of a broader credit-building strategy, not the only thing you rely on.",
      },
    ],
  },
  "mortgage-credit-requirements": {
    title: "Credit Score Requirements for Mortgages in 2026",
    date: "May 5, 2026",
    readTime: "6 min read",
    category: "Homebuying",
    content: [
      {
        heading: "Conventional Loan Requirements",
        body: "Conventional loans backed by Fannie Mae and Freddie Mac typically require a minimum credit score of 620. However, borrowers with scores below 740 will face higher interest rates and may be required to pay private mortgage insurance with higher premiums. The best rates are reserved for borrowers with scores of 760 and above. A 20-point improvement in your credit score can save you tens of thousands of dollars over the life of a 30-year mortgage.",
      },
      {
        heading: "Government-Backed Loan Options",
        body: "FHA loans are available to borrowers with credit scores as low as 500, though a 10% down payment is required for scores between 500 and 579. With a score of 580 or higher, you may qualify with just 3.5% down. VA loans, available to eligible service members and veterans, do not have a minimum credit score requirement set by the VA, though most lenders look for at least 620. USDA loans for rural properties typically require a minimum score of 640.",
      },
      {
        heading: "Preparing Your Credit for a Mortgage Application",
        body: "Start at least 6 to 12 months before you plan to apply. Review your credit reports for errors and dispute any inaccuracies. Avoid opening new credit accounts or making large purchases on credit during this period. Pay down revolving balances to improve your utilization ratio. Our homebuyer readiness program provides a structured plan to optimize your credit profile before you submit your mortgage application.",
      },
    ],
  },
};

const relatedPosts: Record<string, string[]> = {
  "understanding-credit-score-factors": [
    "disputing-credit-report-errors",
    "debt-to-income-ratio-guide",
  ],
  "disputing-credit-report-errors": [
    "understanding-credit-score-factors",
    "credit-after-bankruptcy",
  ],
  "debt-to-income-ratio-guide": [
    "mortgage-credit-requirements",
    "understanding-credit-score-factors",
  ],
  "credit-after-bankruptcy": [
    "authorized-user-strategy",
    "disputing-credit-report-errors",
  ],
  "authorized-user-strategy": [
    "understanding-credit-score-factors",
    "credit-after-bankruptcy",
  ],
  "mortgage-credit-requirements": [
    "debt-to-income-ratio-guide",
    "understanding-credit-score-factors",
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-3">
              Post Not Found
            </h1>
            <p className="text-[var(--text-secondary)] mb-6">
              The blog post you are looking for does not exist.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-gold)] hover:text-[var(--color-gold-300)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const related = (relatedPosts[slug] || [])
    .map((s) => blogPosts[s])
    .filter(Boolean);

  return (
    <div className="pt-20 lg:pt-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] border border-[var(--accent-gold)]/15">
              {post.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mb-10 pb-8 border-b border-[var(--border-subtle)]">
            <span>{post.date}</span>
            <span className="text-[var(--border-default)]">|</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </motion.div>

        <div className="space-y-10">
          {post.content.map((section, i) => (
            <motion.section
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: Math.min(i * 0.08, 0.4) }}
            >
              <h2 className="font-serif text-xl font-semibold text-[var(--text-primary)] mb-3">
                {section.heading}
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                {section.body}
              </p>
            </motion.section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)]">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-lg font-semibold text-base bg-[var(--accent-gold)] text-[var(--bg-primary)] hover:bg-[var(--color-gold-500)] transition-all duration-200"
          >
            Get a Free Credit Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-8">
                Related Articles
              </h2>
              <div className="space-y-4">
                {related.map((rp) => (
                  <Link
                    key={rp.title}
                    href={`/blog/${relatedPosts[slug]?.[related.findIndex((r) => r.title === rp.title)]}`}
                    className="block glass rounded-xl p-5 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-[var(--accent-gold)] font-medium">
                          {rp.category}
                        </span>
                        <h3 className="font-serif text-base font-semibold text-[var(--text-primary)] mt-1 group-hover:text-[var(--accent-gold)] transition-colors">
                          {rp.title}
                        </h3>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-gold)] transition-colors shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            Knowledge is powerful, but action creates change. Let our team help you
            apply these strategies to your unique credit situation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-base bg-[var(--accent-gold)] text-[var(--bg-primary)] hover:bg-[var(--color-gold-500)] transition-all duration-200"
            >
              Free Consultation
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-base glass text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] transition-all duration-200"
            >
              More Articles
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
