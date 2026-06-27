"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg"
        >
          <div className="font-serif text-8xl sm:text-9xl font-bold text-gradient-gold tracking-tight leading-none">
            404
          </div>
          <h1 className="mt-6 font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
            Page not found
          </h1>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
            The page you are looking for does not exist or has been moved.
            It may have been removed, renamed, or is temporarily unavailable.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-base bg-[var(--accent-gold)] text-[var(--bg-primary)] hover:bg-[var(--color-gold-500)] transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
