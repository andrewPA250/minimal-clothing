import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import { ProductDetail } from "@/components/ProductDetail";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <div className="container-px mx-auto max-w-container py-10 sm:py-12 md:py-16">
      <ProductDetail product={product} />

      <div className="mt-20 border-t border-line pt-10 text-center md:mt-28">
        <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
          More designs coming soon — join the newsletter on the homepage to
          see them first.
        </p>
      </div>
    </div>
  );
}
