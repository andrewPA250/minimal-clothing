// Product data types.
//
// These are intentionally shaped close to Printify's product/variant model
// so that swapping mock data for a real Printify API fetch later is a data
//-source change, not a type change. Fields marked "populated by Printify"
// stay undefined until that integration is wired up.

export type Color = "Black" | "White" | "Sport Grey" | "Dark Heather";
export type Size = "XS" | "S" | "M" | "L" | "XL";

export type ProductVariant = {
  id: string; // internal id, stable regardless of data source
  sku: string;
  color: Color;
  size: Size;
  price: number; // EUR, decimal
  inStock: boolean;
  printifyVariantId?: number; // populated once Printify is connected
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  index: string; // spec-sheet style code shown in UI, e.g. "MIN / 001"
  shortDescription: string;
  description: string;
  details: string[]; // material & care bullet points
  basePrice: number; // EUR, decimal — lowest variant price, for grid display
  variants: ProductVariant[];
  // All images for each color this product offers, in display order.
  // The first image in each color's array is that color's primary shot
  // (used for cart thumbnails); the rest fill out the gallery. Scales to
  // any number of images per color — not limited to a front/back pair.
  images: Partial<Record<Color, string[]>>;
  primaryColor: Color; // color shown by default on cards, hero, and shop grid
  printifyProductId?: string; // populated once Printify is connected
};

export type CartLine = {
  variantId: string;
  productSlug: string;
  productName: string;
  color: Color;
  size: Size;
  price: number;
  quantity: number;
};
