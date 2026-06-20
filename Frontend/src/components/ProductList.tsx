import type { Product } from "@/types/product";
import { ProductCard } from "@/components/ProductCard";
import styles from "./product-list.module.css";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
