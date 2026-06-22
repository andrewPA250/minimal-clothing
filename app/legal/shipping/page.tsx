import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy — MINIMAL.",
};

export default function ShippingPage() {
  return (
    <div className="container-px mx-auto max-w-container py-16 sm:py-24 md:py-28">
      <div className="max-w-2xl">
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span className="h-px w-6 bg-muted" aria-hidden="true" />
          Legal
        </p>
        <h1 className="font-display text-4xl uppercase tracking-wide">
          Shipping Policy
        </h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest2 text-muted">
          Last updated: January 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 font-body text-base leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              1. Production Model
            </h2>
            <p className="mt-3">
              MINIMAL. operates on a made-to-order production model. Every item
              is produced after your order is placed and payment is confirmed.
              This ensures quality control and reduces waste.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              2. Processing Times
            </h2>
            <p className="mt-3">
              <strong>Production Timeline:</strong> After payment confirmation,
              your order enters our production queue. Standard production takes
              <strong> 5–7 business days</strong> from the order date. During
              peak seasons (holidays, promotions), production may extend to{" "}
              <strong>10 business days</strong>.
            </p>
            <p className="mt-3">
              <strong>Business Days:</strong> Processing time does not include
              weekends or public holidays. Your order is not processed on these
              days.
            </p>
            <p className="mt-3">
              <strong>Order Status:</strong> Once production is complete, you
              will receive an email notification with tracking information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              3. Shipping Rates and Carriers
            </h2>
            <p className="mt-3">
              MINIMAL. ships from the European Union to customers worldwide.
              Shipping rates are calculated at checkout based on destination
              country and order weight.
            </p>
            <p className="mt-3">
              <strong>EU Shipping:</strong> Orders within the EU typically ship
              via standard postal services or partner carriers. Estimated
              delivery: <strong>2–4 business days</strong> after shipment.
            </p>
            <p className="mt-3">
              <strong>International Shipping:</strong> International orders may
              require additional customs clearance. Estimated delivery: 5–14
              business days depending on destination, customs processing, and
              carrier availability.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              4. Tracking Your Order
            </h2>
            <p className="mt-3">
              Once your order ships, you will receive an email with a tracking
              number. You can use this to monitor delivery progress with the
              carrier. Tracking updates may take 24 hours to appear in the
              carrier's system.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              5. Shipping Estimates and Delays
            </h2>
            <p className="mt-3">
              All production and shipping timelines provided are estimates only.
              MINIMAL. strives to meet these windows but does not guarantee
              exact delivery dates.
            </p>
            <p className="mt-3">
              <strong>Delays Beyond Our Control:</strong> MINIMAL. is not
              responsible for delays caused by:
            </p>
            <ul className="mt-2 ml-4 flex flex-col gap-2">
              <li>Carrier disruptions or delays</li>
              <li>Customs clearance or import/export delays</li>
              <li>Severe weather or natural disasters</li>
              <li>Strikes or labor actions</li>
              <li>Government actions or restrictions</li>
              <li>Military conflicts or acts of terrorism</li>
            </ul>
            <p className="mt-3">
              In such cases, MINIMAL. will communicate any delays to you as soon
              as possible.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              6. Lost or Damaged Shipments
            </h2>
            <p className="mt-3">
              If your order does not arrive within the expected timeframe or
              arrives damaged:
            </p>
            <ol className="mt-2 ml-4 flex flex-col gap-2">
              <li>
                <strong>Photograph the damage:</strong> If the item is damaged,
                photograph the packaging and the damaged item.
              </li>
              <li>
                <strong>Contact us:</strong> Email{" "}
                <a
                  href="mailto:support@wearminimal.eu"
                  className="underline decoration-line underline-offset-2 transition-colors duration-250 hover:text-ink"
                >
                  support@wearminimal.eu
                </a>{" "}
                with your order number, tracking number, and photos (for damage
                claims).
              </li>
              <li>
                <strong>File a carrier claim:</strong> We will assist you in
                filing a claim with the shipping carrier if applicable.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              7. International Customs and Taxes
            </h2>
            <p className="mt-3">
              For international orders, your country may impose customs duties,
              VAT, or other taxes on import. These are the responsibility of the
              customer and are not included in our shipping price. Check your
              local customs regulations before ordering.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              8. Address and Corrections
            </h2>
            <p className="mt-3">
              Please double-check your shipping address before placing your
              order. We cannot change shipping addresses after production has
              begun. If there is an error in your address, contact us
              immediately at{" "}
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
              9. Free Shipping Threshold
            </h2>
            <p className="mt-3">
              Shipping costs are displayed at checkout. MINIMAL. may offer free
              or discounted shipping promotions at various times. Any promotions
              are clearly stated at the time of order.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-wide text-ink">
              10. Contact
            </h2>
            <p className="mt-3">
              If you have questions about shipping or need to report an issue,
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
