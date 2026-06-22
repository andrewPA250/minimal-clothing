import { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";

const BASE_URL = "https://wearminimal.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/shipping",
    "/legal/refunds",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const productRoutes = getAllProducts().map((product) => ({
    url: `${BASE_URL}/product/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
