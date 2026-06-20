import type { Product } from "@/types/product";
import { fetchJSON } from "@/lib/apiClient";
import { mockProducts } from "@/data/mockProducts";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<Product[]> {
  if (API_BASE_URL) {
    return fetchJSON<Product[]>("/products", {
      next: { revalidate: 60 },
    });
  }

  return mockProducts;
}
