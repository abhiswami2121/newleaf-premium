import Link from "next/link";

const sections = [
  {
    heading: "Acceptance of Terms",
    content:
      "By accessing or using NewLeaf Financial services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services. We reserve the right to update these terms at any time, and continued use of our services constitutes acceptance of any changes.",
  },
  {
    heading: "Services Description",
    content:
      "NewLeaf Financial provides credit restoration, debt negotiation, credit monitoring, and financial wellness services. Our services include credit report analysis, dispute filing with credit bureaus, creditor interventions, and financial coaching. All services are provided in accordance with applicable federal and state laws including the Fair Credit Reporting Act (FCRA), Fair Credit Billing Act (FCBA), and Fair Debt Collection Practices Act (FDCPA).",
  },
  {
    heading: "Client Responsibilities",
    content:
      "Clients agree to provide accurate and complete information necessary for us to perform our services. This includes identity verification documents, current credit reports, creditor correspondence, and any other documentation reasonably requested. Clients are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.",
  },
  {
    heading: "Payment Terms",
    content:
      "Services are billed on a monthly subscription basis. Fees are charged at the beginning of each billing cycle. All fees are non-refundable except as provided in our 30-day money-back guarantee. We reserve the right to modify pricing with 30 days notice to active clients. Clients may cancel their subscription at any time, with cancellation taking effect at the end of the current billing cycle.",
  },
  {
    heading: "No Guarantee of Results",
    content:
      "While NewLeaf Financial employs proven methodologies and has a strong track record of success, credit restoration outcomes depend on numerous factors including the accuracy of reported items, creditor responsiveness, and the client's overall credit profile. We do not guarantee specific score increases, removal of specific items, or any particular outcome. Our obligation is to perform the services described with professional diligence and to provide transparent reporting throughout the engagement.",
  },
  {
    heading: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, NewLeaf Financial shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the use of our services. Our total liability for any claim arising from our services shall not exceed the fees paid by the client during the twelve months preceding the claim.",
  },
  {
    heading: "Privacy and Data Protection",
    content:
      "We take the protection of your personal and financial information seriously. Our collection, use, and disclosure of client information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We implement industry-standard security measures to protect client data and comply with applicable data protection laws.",
  },
  {
    heading: "Dispute Resolution",
    content:
      "Any dispute arising from or relating to these Terms or our services shall first be addressed through informal negotiation. If the dispute cannot be resolved within 30 days, either party may pursue binding arbitration in accordance with the rules of the American Arbitration Association. Arbitration shall take place in the state of the client's residence.",
  },
  {
    heading: "Termination",
    content:
      "Either party may terminate the service relationship at any time. NewLeaf Financial reserves the right to terminate or suspend services immediately if a client violates these Terms, provides false or misleading information, or engages in conduct that we reasonably believe could harm NewLeaf Financial, its employees, or other clients.",
  },
  {
    heading: "Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles. Any legal action arising from these Terms shall be brought exclusively in the federal or state courts located in Delaware.",
  },
];

export default function TermsPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="mb-14">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-[var(--text-muted)] text-sm">
            Last updated: June 1, 2026
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-serif text-xl font-semibold text-[var(--text-primary)] mb-3">
                {i + 1}. {section.heading}
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)]">
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            If you have any questions about these Terms, please{" "}
            <Link
              href="/contact"
              className="text-[var(--accent-gold)] hover:text-[var(--color-gold-300)] transition-colors underline decoration-[var(--accent-gold)]/30 underline-offset-2"
            >
              contact us
            </Link>
            . These Terms represent the entire agreement between you and NewLeaf
            Financial regarding the use of our services.
          </p>
        </div>
      </div>
    </div>
  );
}
