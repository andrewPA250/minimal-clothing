import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — MINIMAL.",
};

export default function TermsPage() {
  return (
    <div className="container-px mx-auto max-w-container py-16 sm:py-24 md:py-28">
      <div className="max-w-2xl">
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span className="h-px w-6 bg-muted" aria-hidden="true" />
          Legal
        </p>
        <h1 className="font-display text-4xl uppercase tracking-wide">
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest2 text-muted">
          Last updated: January 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 font-body text-base leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              1. Agreement to Terms
            </h2>
            <p className="mt-3">
              By accessing and using wearminimal.eu (the "Site"), you accept
              and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              2. Use License
            </h2>
            <p className="mt-3">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on MINIMAL.'s website for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="mt-2 ml-4 flex flex-col gap-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person or "mirror" the
                materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              3. Disclaimer
            </h2>
            <p className="mt-3">
              The materials on MINIMAL.'s website are provided on an "as is"
              basis. MINIMAL. makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-
              infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              4. Limitations
            </h2>
            <p className="mt-3">
              In no event shall MINIMAL. or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the
              use or inability to use the materials on MINIMAL.'s website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              5. Accuracy of Materials
            </h2>
            <p className="mt-3">
              The materials appearing on MINIMAL.'s website could include
              technical, typographical, or photographic errors. MINIMAL. does
              not warrant that any of the materials on the website are accurate,
              complete, or current. MINIMAL. may make changes to the materials
              contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              6. Links
            </h2>
            <p className="mt-3">
              MINIMAL. has not reviewed all of the sites linked to its website
              and is not responsible for the contents of any such linked site.
              The inclusion of any link does not imply endorsement by MINIMAL.
              of the site. Use of any such linked website is at the user's own
              risk.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              7. Modifications
            </h2>
            <p className="mt-3">
              MINIMAL. may revise these terms of service for its website at any
              time without notice. By using this website, you are agreeing to be
              bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              8. Ordering and Payment
            </h2>
            <p className="mt-3">
              All orders are subject to acceptance and verification. MINIMAL.
              reserves the right to refuse or cancel any order. Prices and
              availability are subject to change without notice. All orders must
              be paid in full before production begins.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              9. Product Descriptions
            </h2>
            <p className="mt-3">
              We strive to provide accurate product descriptions, colors, and
              specifications. However, we do not warrant that product
              descriptions, pricing, or other content on our Site is accurate,
              complete, reliable, current, or error-free. If a product offered
              by MINIMAL. is not as described, your sole remedy is to return it
              in unused condition.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              10. Intellectual Property
            </h2>
            <p className="mt-3">
              All content on the Site, including text, graphics, logos, images,
              and software, is the property of MINIMAL. or its content suppliers
              and is protected by international copyright laws. Unauthorized use
              is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              11. Governing Law
            </h2>
            <p className="mt-3">
              These terms and conditions are governed by and construed in
              accordance with the laws applicable to online commerce in the
              European Union, and you irrevocably submit to the exclusive
              jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              12. Contact
            </h2>
            <p className="mt-3">
              If you have any questions about these Terms &amp; Conditions,
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
