import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — MINIMAL.",
};

export default function RefundsPage() {
  return (
    <div className="container-px mx-auto max-w-container py-16 sm:py-24 md:py-28">
      <div className="max-w-2xl">
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span className="h-px w-6 bg-muted" aria-hidden="true" />
          Legal
        </p>
        <h1 className="font-display text-4xl uppercase tracking-wide">
          Refund Policy
        </h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest2 text-muted">
          Last updated: January 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 font-body text-base leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              1. Overview
            </h2>
            <p className="mt-3">
              MINIMAL. is committed to ensuring customer satisfaction. We accept
              returns and refunds only under specific circumstances outlined in
              this policy. All items are made-to-order and produced after
              payment, so returns are limited to defects and errors.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              2. Acceptable Returns
            </h2>
            <p className="mt-3">
              We accept returns for the following reasons only:
            </p>
            <ul className="mt-2 ml-4 flex flex-col gap-2">
              <li>
                <strong>Damaged or Defective Items:</strong> The product arrived
                visibly damaged, with defects in stitching, printing, or
                material quality.
              </li>
              <li>
                <strong>Incorrect Item:</strong> You received a different item
                than what you ordered (wrong size, color, or product).
              </li>
              <li>
                <strong>Missing Deliveries:</strong> Your order did not arrive
                within the extended delivery window and cannot be located by the
                carrier.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              3. Non-Returnable Items
            </h2>
            <p className="mt-3">
              The following are <strong>not eligible</strong> for return or
              refund:
            </p>
            <ul className="mt-2 ml-4 flex flex-col gap-2">
              <li>
                <strong>Buyer's Remorse:</strong> Change of mind, not liking the
                product, or wishing to cancel an order after production has
                begun.
              </li>
              <li>
                <strong>Incorrect Size Selected:</strong> If you chose the wrong
                size, we cannot accept a return. Please consult our Size Guide
                before ordering.
              </li>
              <li>
                <strong>Worn or Altered Items:</strong> Items that have been
                worn, washed, or altered after delivery.
              </li>
              <li>
                <strong>Normal Wear:</strong> Fading or minor imperfections from
                normal use after delivery.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              4. Return Process for Damaged or Defective Items
            </h2>
            <p className="mt-3">
              If your item is damaged, defective, or incorrect:
            </p>
            <ol className="mt-2 ml-4 flex flex-col gap-2">
              <li>
                <strong>Document the Issue:</strong> Photograph the damaged
                item, defect, or packaging. Photos must clearly show the issue.
              </li>
              <li>
                <strong>Contact Support:</strong> Email{" "}
                <a
                  href="mailto:support@wearminimal.eu"
                  className="underline decoration-line underline-offset-2 transition-colors duration-250 hover:text-ink"
                >
                  support@wearminimal.eu
                </a>{" "}
                within <strong>14 days</strong> of delivery with:
                <ul className="mt-2 ml-4 flex flex-col gap-2">
                  <li>Your order number</li>
                  <li>Clear photos of the issue</li>
                  <li>A brief description of the problem</li>
                </ul>
              </li>
              <li>
                <strong>Replacement or Refund:</strong> Once we review your
                claim:
                <ul className="mt-2 ml-4 flex flex-col gap-2">
                  <li>
                    If the item is damaged or defective due to our production
                    error, we will send a free replacement at no cost.
                  </li>
                  <li>
                    If a replacement is not possible, a full refund will be
                    issued.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Return Shipping:</strong> For replacements or refunds,
                we will provide a prepaid return shipping label. Items must be
                returned in original packaging when possible.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              5. Refunds for Missing Deliveries
            </h2>
            <p className="mt-3">
              If your order does not arrive within the estimated delivery window
              and the carrier cannot locate it:
            </p>
            <ol className="mt-2 ml-4 flex flex-col gap-2">
              <li>
                <strong>Contact Us:</strong> Email support with your order
                number and tracking number.
              </li>
              <li>
                <strong>Carrier Investigation:</strong> We will file a claim
                with the shipping carrier. This process typically takes 10–20
                business days.
              </li>
              <li>
                <strong>Refund or Replacement:</strong> Once the carrier
                confirms the loss, we will either send a replacement or issue a
                full refund, including original shipping costs.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              6. Refund Timeline
            </h2>
            <p className="mt-3">
              Once your return is approved and we receive your item:
            </p>
            <ul className="mt-2 ml-4 flex flex-col gap-2">
              <li>
                <strong>Processing:</strong> We inspect the returned item within
                5–7 business days.
              </li>
              <li>
                <strong>Refund Issuance:</strong> Once approved, refunds are
                processed to your original payment method within 5–10 business
                days.
              </li>
              <li>
                <strong>Bank Processing:</strong> Your bank may take an
                additional 3–5 business days to post the refund to your account.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              7. Shipping Costs
            </h2>
            <p className="mt-3">
              <strong>Original Shipping:</strong> For items approved for refund
              due to our error (damaged, defective, or incorrect item), the
              original shipping cost is fully refunded.
            </p>
            <p className="mt-3">
              <strong>Return Shipping:</strong> We provide prepaid return
              shipping labels for all approved returns.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              8. Exclusions and Limitations
            </h2>
            <p className="mt-3">
              We reserve the right to refuse returns or refunds for:
            </p>
            <ul className="mt-2 ml-4 flex flex-col gap-2">
              <li>Items returned after 30 days of delivery</li>
              <li>
                Items showing evidence of wear, washing, or alteration
              </li>
              <li>Claims without supporting documentation or photos</li>
              <li>Items that do not meet the acceptable returns criteria</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              9. Exchanges
            </h2>
            <p className="mt-3">
              For items with confirmed defects or production errors, we will
              automatically send a replacement at no additional cost. Exchanges
              for different sizes or colors are not available; please place a
              new order instead.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              10. Contact
            </h2>
            <p className="mt-3">
              For return or refund inquiries, please contact us at:
            </p>
            <p className="mt-3 font-mono text-sm">
              support@wearminimal.eu
              <br />
              wearminimal.eu
            </p>
            <p className="mt-3">
              We are here to help and will respond to all inquiries within 1–2
              business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
