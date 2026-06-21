import { Color, Product, Size } from "./types";

const SIZES: Size[] = ["XS", "S", "M", "L", "XL"];

function colorCode(color: Color): string {
  return color
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function colorSlug(color: Color): string {
  return color.toLowerCase().replace(/\s+/g, "-");
}

function buildVariants(
  slug: string,
  price: number,
  colors: Color[]
): Product["variants"] {
  const variants: Product["variants"] = [];
  colors.forEach((color) => {
    SIZES.forEach((size) => {
      variants.push({
        id: `${slug}-${colorSlug(color)}-${size.toLowerCase()}`,
        sku: `${slug.toUpperCase()}-${colorCode(color)}-${size}`,
        color,
        size,
        price,
        inStock: true,
      });
    });
  });
  return variants;
}

// MOCK DATA — replace with a Printify API fetch (GET /shops/{shop_id}/products.json)
// once real keys are connected. Keep the Product shape identical so no
// downstream component needs to change.
export const products: Product[] = [
  {
    id: "1",
    slug: "signature-tee",
    name: "Signature Tee",
    index: "MIN / 001",
    shortDescription: "The foundation piece.",
    description:
      "The piece everything else is built around. Heavyweight cotton, a clean block silhouette, and no branding on the front. Designed to be the one tee you reach for first.",
    details: [
      "100% heavyweight cotton, 220gsm",
      "Machine wash cold, inside out",
      "Do not iron print",
      "Made to order",
    ],
    basePrice: 29.99,
    variants: buildVariants("signature-tee", 29.99, ["Black", "White"]),
    // Front is this product's defining shot — listed first in every color.
    images: {
      Black: [
        "/products/signature-tee/front-black.jpg",
        "/products/signature-tee/back-black.jpg",
      ],
      White: [
        "/products/signature-tee/front-white.jpg",
        "/products/signature-tee/back-white.jpg",
      ],
    },
    primaryColor: "Black",
  },
  {
    id: "2",
    slug: "focus-tee",
    name: "Focus Tee",
    index: "MIN / 002",
    shortDescription: "Built for clarity.",
    description:
      "A tighter, more structured cut with a subtle geometric mark at the chest. For when the essential needs one quiet detail and nothing more.",
    details: [
      "100% heavyweight cotton, 220gsm",
      "Machine wash cold, inside out",
      "Do not iron print",
      "Made to order",
    ],
    basePrice: 34.99,
    variants: buildVariants("focus-tee", 34.99, ["Black", "White"]),
    // The back print (the statue mark) is this product's defining visual,
    // so it's listed first in every color — front stays in the gallery.
    images: {
      Black: [
        "/products/focus-tee/back-black.jpeg",
        "/products/focus-tee/front-black.jpeg",
      ],
      White: [
        "/products/focus-tee/back-white.jpeg",
        "/products/focus-tee/front-white.jpeg",
      ],
    },
    primaryColor: "Black",
  },
  {
    id: "3",
    slug: "you-vs-you-tee",
    name: "You vs You Tee",
    index: "MIN / 003",
    shortDescription: "The only comparison that matters.",
    description:
      "The You vs You Tee is built around the only comparison that matters. A clean front design paired with a bold back statement, created for those who understand that progress comes from discipline, consistency and self-improvement. No outside noise. No excuses. Just you versus the person you were yesterday. Minimal on the front. Driven on the back. You vs You.",
    details: [
      "Gildan 5000",
      "100% cotton (fiber content may vary by color)",
      "Medium fabric, 180 g/m²",
      "Classic fit",
      "Tear-away label",
      "Durable year-round construction",
      "Ethically sourced US cotton",
      "OEKO-TEX® STANDARD 100 certified",
    ],
    basePrice: 32.99,
    variants: buildVariants("you-vs-you-tee", 32.99, [
      "White",
      "Sport Grey",
      "Dark Heather",
    ]),
    // The back statement ("YOU vs YOU.") is this product's defining
    // visual, so it's listed first in every color — front stays in the
    // gallery.
    images: {
      White: [
        "/products/you-vs-you-tee/back-white.jpg",
        "/products/you-vs-you-tee/front-white.jpg",
      ],
      "Sport Grey": [
        "/products/you-vs-you-tee/back-sport-grey.jpg",
        "/products/you-vs-you-tee/front-sport-grey.jpg",
      ],
      "Dark Heather": [
        "/products/you-vs-you-tee/back-dark-heather.jpg",
        "/products/you-vs-you-tee/front-dark-heather.jpg",
      ],
    },
    primaryColor: "White",
  },
  {
    id: "4",
    slug: "virtus-tee",
    name: "Virtus Tee",
    index: "MIN / 004",
    shortDescription: "Strength, discipline, self-mastery.",
    description:
      "Inspired by the Roman virtue of strength, discipline and self-mastery. The Virtus Tee represents the mindset of those who choose purpose over comfort and consistency over excuses. Featuring a minimalist front design and a bold classical warrior graphic on the back, it serves as a reminder that character is built through action. Designed for those who compete with themselves every day. Simplicity Wins.",
    details: [
      "100% cotton",
      "Medium-weight fabric, 180 g/m² / 5.3 oz/yd²",
      "Classic fit",
      "Tear-away label",
      "Crew neckline",
      "Ethically sourced US cotton",
      "OEKO-TEX® STANDARD 100 certified",
    ],
    basePrice: 32.99,
    variants: buildVariants("virtus-tee", 32.99, ["White", "Black"]),
    // The warrior graphic on the back is this product's defining visual,
    // so it's listed first in every color — front stays in the gallery.
    images: {
      White: [
        "/products/virtus-tee/back-white.jpg",
        "/products/virtus-tee/front-white.jpg",
      ],
      Black: [
        "/products/virtus-tee/back-black.jpg",
        "/products/virtus-tee/front-black.jpg",
      ],
    },
    primaryColor: "White",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}
