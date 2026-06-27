"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  Search,
  Sparkles,
  FileSearch,
  TrendingUp,
  ShieldCheck,
  Handshake,
  Eye,
  PiggyBank,
  Star,
  ChevronDown,
  ArrowRight,
  Play,
  ArrowUpRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

function AnimatedCounter({
  end,
  format,
  duration = 2000,
  className,
}: {
  end: number
  format: (value: number) => string
  duration?: number
  className?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    if (!inView) return
    let startTimestamp: number | null = null
    let raf: number

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const elapsed = timestamp - startTimestamp
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * end)
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {format(count)}
    </span>
  )
}

function ScoreGauge() {
  const score = 718
  const min = 300
  const max = 850
  const percentage = (score - min) / (max - min)
  const radius = 80
  const circumference = Math.PI * radius
  const dash = circumference * percentage

  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      <svg viewBox="0 0 200 135" className="w-full" role="img" aria-label={`Credit score gauge showing ${score} - Good`}>
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4762c" />
            <stop offset="40%" stopColor="#c49b3c" />
            <stop offset="100%" stopColor="#f2d999" />
          </linearGradient>
        </defs>

        <path
          d="M 20 115 A 80 80 0 0 1 180 115"
          fill="none"
          stroke="rgba(196,155,60,0.1)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        <motion.path
          d="M 20 115 A 80 80 0 0 1 180 115"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          strokeDashoffset="0"
          initial={{ strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: `${dash} ${circumference}` }}
          transition={{ duration: 1.8, ease: "easeOut" as const, delay: 0.3 }}
        />

        <text
          x="100"
          y="88"
          textAnchor="middle"
          fill="#ede4d8"
          fontSize="36"
          fontWeight="700"
          fontFamily="var(--font-libre-baskerville), Georgia, serif"
        >
          718
        </text>

        <text
          x="100"
          y="110"
          textAnchor="middle"
          fill="#c49b3c"
          fontSize="13"
          fontWeight="600"
          fontFamily="var(--font-inter), sans-serif"
          letterSpacing="1"
        >
          GOOD
        </text>

        <text x="20" y="132" fill="#7d7060" fontSize="10" textAnchor="middle">
          300
        </text>
        <text x="180" y="132" fill="#7d7060" fontSize="10" textAnchor="middle">
          850
        </text>
      </svg>

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20">
        <ArrowUpRight className="w-3 h-3 text-[var(--accent-green)]" />
        <span className="text-xs font-semibold text-[var(--accent-green)]">+48pts</span>
      </div>
    </div>
  )
}

function StarRating({ count, className }: { count: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < count ? "text-[var(--accent-gold)] fill-[var(--accent-gold)]" : "text-[var(--text-muted)]"
          )}
        />
      ))}
    </div>
  )
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-[var(--border-subtle)] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
      >
        <span
          className={cn(
            "text-lg font-serif font-bold transition-colors duration-200",
            isOpen ? "text-[var(--accent-gold)]" : "text-[var(--text-primary)] group-hover:text-[var(--text-primary)]"
          )}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "flex-shrink-0 ml-4 transition-colors",
            isOpen ? "text-[var(--accent-gold)]" : "text-[var(--text-muted)]"
          )}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[var(--text-secondary)] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

const howItWorksSteps = [
  {
    number: "01",
    icon: Search,
    title: "Free Credit Scan",
    description: "We analyze your credit reports from all three bureaus to identify inaccuracies, negative items, and opportunities for rapid improvement.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Custom Plan",
    description: "Our AI builds your personalized restoration strategy, targeting the items that will have the greatest impact on your score.",
  },
  {
    number: "03",
    icon: FileSearch,
    title: "We Dispute",
    description: "We challenge inaccurate, unverifiable, and unfair items on your behalf using proven legal frameworks and bureau relationships.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "You Build",
    description: "With clean reports, you build new positive credit history through guided strategies, secured cards, and responsible credit use.",
  },
]

const services = [
  {
    icon: ShieldCheck,
    title: "Credit Restoration",
    description: "Comprehensive credit repair addressing late payments, collections, charge-offs, bankruptcies, and identity theft.",
  },
  {
    icon: Handshake,
    title: "Debt Negotiation",
    description: "Professional negotiation with creditors to reduce balances, settle accounts, and establish manageable payment plans.",
  },
  {
    icon: Eye,
    title: "Credit Monitoring",
    description: "Real-time alerts across all three bureaus, identity theft protection, and monthly progress reports delivered to your dashboard.",
  },
  {
    icon: PiggyBank,
    title: "Financial Wellness",
    description: "Budgeting tools, savings plans, and financial education resources designed to build lasting financial health.",
  },
]

const testimonials = [
  {
    improvement: 82,
    quote: "I went from a 592 to a 674 in just four months. NewLeaf disputed 11 items on my report, and 9 were removed. I qualified for a mortgage that I never thought possible.",
    name: "Michael R.",
    location: "Dallas, TX",
  },
  {
    improvement: 124,
    quote: "After my divorce, my credit was destroyed. NewLeaf helped me dispute inaccurate accounts and negotiate my remaining debt. My score jumped 124 points, and I bought a car with a 4.2% rate.",
    name: "Sarah K.",
    location: "Phoenix, AZ",
  },
  {
    improvement: 67,
    quote: "I had medical collections I didn't even know about. NewLeaf found them, disputed them, and got them all removed within 60 days. The online dashboard kept me informed every step of the way.",
    name: "James T.",
    location: "Atlanta, GA",
  },
]

const faqs = [
  {
    question: "How does NewLeaf improve my credit score?",
    answer: "We start with a comprehensive analysis of your credit reports from Experian, Equifax, and TransUnion. Our AI identifies inaccuracies, outdated items, and negative entries that can be legally challenged. We then file disputes on your behalf, negotiate with creditors, and guide you through building positive credit history. Most clients see their first deletions within 45 days.",
  },
  {
    question: "Is credit repair legal?",
    answer: "Absolutely. The Fair Credit Reporting Act (FCRA) gives you the right to dispute any inaccurate, incomplete, or unverifiable information on your credit report. NewLeaf works within these federal laws to ensure your credit report accurately reflects your financial history. We never promise to remove accurate negative items and are fully compliant with the Credit Repair Organizations Act (CROA).",
  },
  {
    question: "How long does credit restoration take?",
    answer: "Results vary based on the complexity of your case, but most clients see their first deletions within 30-60 days. Full restoration typically takes 3-6 months, though clients with extensive issues may require 6-12 months. You'll receive monthly progress reports so you can track every deletion and score change in real time.",
  },
  {
    question: "What makes NewLeaf different from other credit repair companies?",
    answer: "NewLeaf combines AI-powered analysis with human expertise. Our technology identifies the fastest path to score improvement, while our team of credit specialists handles every dispute personally. We've disputed over $2.4 billion in negative items and maintain a 98% client satisfaction rate. Unlike many competitors, we also provide financial wellness tools to help you build lasting credit health, not just temporary fixes.",
  },
  {
    question: "How much does it cost?",
    answer: "NewLeaf offers transparent, flat-rate pricing with no hidden fees. Plans start at $79/month for credit restoration, with premium packages including debt negotiation and monitoring starting at $129/month. There are no setup fees, no per-deletion charges, and you can cancel anytime. We also offer a free initial credit scan so you can see exactly what we can do before committing.",
  },
]

const trustLogos = [
  { name: "Forbes", font: "font-serif", size: "text-xl" },
  { name: "CNBC", font: "font-sans", size: "text-lg", weight: "font-black" },
  { name: "Business Insider", font: "font-sans", size: "text-base", weight: "font-bold" },
  { name: "Yahoo Finance", font: "font-sans", size: "text-lg", weight: "font-bold" },
  { name: "MarketWatch", font: "font-sans", size: "text-base", weight: "font-semibold" },
]

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <div className="overflow-x-hidden">

      <section className="relative min-h-screen flex items-center bg-[var(--bg-primary)] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(196,155,60,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[var(--accent-gold)] opacity-[0.015] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h1
                variants={staggerItem}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-[var(--text-primary)] text-balance"
              >
                Stop Letting Your{" "}
                <span className="text-gradient-gold">Past</span>
                <br />
                Control Your Future
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl text-balance"
              >
                AI-powered credit repair, professional debt negotiation, and proven score-building strategies — all working together to give you the credit you deserve.
              </motion.p>

              <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[var(--accent-gold)] text-[var(--bg-primary)] text-base font-semibold hover:bg-[var(--color-gold-400)] transition-all duration-200 shadow-[0_0_30px_rgba(196,155,60,0.15)] hover:shadow-[0_0_40px_rgba(196,155,60,0.25)]"
                >
                  Start My Free Scan
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg glass text-[var(--text-primary)] text-base font-semibold hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] transition-all duration-200">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </button>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 border-t border-[var(--border-subtle)]"
              >
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl font-bold text-[var(--accent-gold)]">2.4B+</span>
                  <span className="text-sm text-[var(--text-muted)]">Disputed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl font-bold text-[var(--accent-gold)]">15,000+</span>
                  <span className="text-sm text-[var(--text-muted)]">Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl font-bold text-[var(--accent-gold)]">98%</span>
                  <span className="text-sm text-[var(--text-muted)]">Satisfaction</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="glass p-8 sm:p-10 rounded-[var(--radius-xl)] w-full max-w-[380px]">
                <ScoreGauge />
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-muted)]">Current Score</span>
                    <span className="font-semibold text-[var(--text-primary)]">718</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-muted)]">Starting Score</span>
                    <span className="font-semibold text-[var(--text-muted)]">670</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-muted)]">Items Disputed</span>
                    <span className="font-semibold text-[var(--text-primary)]">14</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-muted)]">Items Removed</span>
                    <span className="font-semibold text-[var(--accent-green)]">11</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] text-balance">
              How NewLeaf Works
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl mx-auto text-balance">
              Four simple steps from where you are to where you want to be.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative group"
              >
                <div className="glass rounded-[var(--radius-xl)] p-6 sm:p-8 h-full transition-all duration-300 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)]">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-[var(--accent-gold)]" />
                    </div>
                    <span className="font-serif text-2xl font-bold text-[var(--accent-gold)]/20">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8">
                    <div className="border-t border-dashed border-[var(--border-default)]" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-[var(--color-gold-900)]/10 border-y border-[var(--border-subtle)]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,155,60,0.04) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--accent-gold)] mb-2">
                <AnimatedCounter
                  end={15000}
                  format={(v) => `${Math.round(v).toLocaleString()}+`}
                />
              </div>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base font-medium">Clients Helped</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--accent-gold)] mb-2">
                <AnimatedCounter
                  end={2400000}
                  format={(v) => `${(v / 1000000).toFixed(1)}M+`}
                />
              </div>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base font-medium">Challenges Filed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--accent-gold)] mb-2">
                <AnimatedCounter
                  end={98}
                  format={(v) => `${Math.round(v)}%`}
                />
              </div>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base font-medium">Success Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">
              As Featured In
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {trustLogos.map((logo) => (
                <span
                  key={logo.name}
                  className={cn(
                    logo.font,
                    logo.size,
                    logo.weight,
                    "text-[var(--text-muted)]/60 tracking-wide select-none"
                  )}
                >
                  {logo.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] text-balance">
              Everything You Need to Rebuild
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl mx-auto text-balance">
              Comprehensive financial tools designed to restore your credit and build lasting wealth.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group glass rounded-[var(--radius-xl)] p-6 sm:p-8 transition-all duration-300 hover:bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/15 flex items-center justify-center mb-5 group-hover:bg-[var(--accent-gold)]/15 group-hover:border-[var(--accent-gold)]/25 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-[var(--accent-gold)]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] text-balance">
              Real Results from Real Clients
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-2xl mx-auto text-balance">
              Thousands of clients have transformed their financial futures with NewLeaf.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={staggerItem}
                className="glass rounded-[var(--radius-xl)] p-6 sm:p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-serif text-3xl font-bold text-[var(--accent-gold)]">
                    +{testimonial.improvement}
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">point increase</span>
                </div>
                <blockquote className="flex-1 text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{testimonial.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">{testimonial.location}</p>
                  </div>
                  <StarRating count={5} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-14 sm:mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] text-balance">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="glass rounded-[var(--radius-xl)] p-6 sm:p-8"
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={staggerItem}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="cta"
        className="relative py-24 sm:py-32 bg-[var(--bg-primary)] overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,155,60,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[var(--accent-gold)] opacity-[0.02] blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] text-balance"
          >
            Ready to Reclaim Your Credit?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[var(--text-secondary)] text-lg max-w-xl mx-auto text-balance"
          >
            Join 15,000+ clients who have transformed their financial future. Your free scan takes less than 3 minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-lg bg-[var(--accent-gold)] text-[var(--bg-primary)] text-lg font-semibold hover:bg-[var(--color-gold-400)] transition-all duration-200 shadow-[0_0_30px_rgba(196,155,60,0.15)] hover:shadow-[0_0_40px_rgba(196,155,60,0.25)]"
            >
              Start Your Free Scan
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-xs text-[var(--text-muted)]"
          >
            No credit card required. No impact to your credit score.
          </motion.p>
        </div>
      </section>

    </div>
  )
}
