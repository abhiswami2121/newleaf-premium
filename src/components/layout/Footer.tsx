import Link from "next/link";

const footerLinks = {
  Services: [
    { href: "/services#credit", label: "Credit Restoration" },
    { href: "/services#debt", label: "Debt Negotiation" },
    { href: "/services#monitoring", label: "Credit Monitoring" },
    { href: "/services#financial", label: "Financial Wellness" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/results", label: "Client Results" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Resources: [
    { href: "/blog", label: "Credit Guides" },
    { href: "/pricing", label: "Pricing" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-amber)] flex items-center justify-center">
                <span className="text-[var(--bg-primary)] font-serif font-bold text-xs">N</span>
              </div>
              <span className="font-serif text-base font-bold text-[var(--text-primary)]">
                NewLeaf
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Rebuild your credit. Reclaim your future. Premium credit restoration
              services backed by proven results.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} NewLeaf Financial. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors"
            >
              Terms
            </Link>
            <span className="text-[var(--text-muted)]">·</span>
            <Link
              href="/privacy"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
