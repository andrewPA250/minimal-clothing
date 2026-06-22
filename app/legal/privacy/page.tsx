import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — MINIMAL.",
};

export default function PrivacyPage() {
  return (
    <div className="container-px mx-auto max-w-container py-16 sm:py-24 md:py-28">
      <div className="max-w-2xl">
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span className="h-px w-6 bg-muted" aria-hidden="true" />
          Legal
        </p>
        <h1 className="font-display text-4xl uppercase tracking-wide">
          Privacy Policy
        </h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest2 text-muted">
          Last updated: January 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 font-body text-base leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              1. Introduction
            </h2>
            <p className="mt-3">
              MINIMAL. ("we," "us," "our," or "Company") operates the website
              wearminimal.eu (the "Site"). This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our Site and make purchases.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We collect information you provide directly, such as when you:
            </p>
            <ul className="mt-2 ml-4 flex flex-col gap-2">
              <li>Create an account or place an order</li>
              <li>Fill out contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Send us support inquiries</li>
            </ul>
            <p className="mt-3">
              This information may include your name, email address, shipping
              address, order history, and communication preferences.
            </p>
            <p className="mt-3">
              We also automatically collect certain information about your
              device and browsing behavior through cookies and similar
              technologies, including IP address, browser type, pages visited,
              and referral source.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-2 ml-4 flex flex-col gap-2">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our Site and services</li>
              <li>Detect and prevent fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              4. Data Sharing
            </h2>
            <p className="mt-3">
              We may share your information with third parties only in the
              following circumstances:
            </p>
            <ul className="mt-2 ml-4 flex flex-col gap-2">
              <li>
                <strong>Service Providers:</strong> We share order and customer
                data with our production and fulfillment partner, Printify, to
                produce and ship your items.
              </li>
              <li>
                <strong>Payment Processors:</strong> We share billing
                information with payment processors to process transactions
                (when payment is integrated).
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information
                when required by law or to protect our rights and safety.
              </li>
            </ul>
            <p className="mt-3">
              We do not sell or rent your personal information to third parties
              for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              5. Cookies and Tracking
            </h2>
            <p className="mt-3">
              Our Site uses cookies and similar tracking technologies to enhance
              your browsing experience, remember your preferences, and analyze
              site usage. You can control cookie settings through your browser
              preferences.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              6. Your Rights
            </h2>
            <p className="mt-3">
              Depending on your location, you may have the right to:
            </p>
            <ul className="mt-2 ml-4 flex flex-col gap-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a portable copy of your information</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:support@wearminimal.eu"
                className="underline decoration-line underline-offset-2 transition-colors duration-250 hover:text-ink"
              >
                support@wearminimal.eu
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              7. Data Security
            </h2>
            <p className="mt-3">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no security
              system is completely secure, and we cannot guarantee absolute
              protection.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              8. Retention
            </h2>
            <p className="mt-3">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, comply with
              legal obligations, or resolve disputes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              9. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and the "Last updated" date will be
              revised accordingly. Your continued use of the Site constitutes
              your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              10. Contact Us
            </h2>
            <p className="mt-3">
              If you have questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mt-3 font-mono text-sm">
              support@wearminimal.eu
              <br />
              wearminimal.eu
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
