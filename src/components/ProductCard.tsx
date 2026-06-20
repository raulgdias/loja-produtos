import Image from "next/image";
import type { Product } from "@/types/product";
import { formatCurrency } from "@/lib/format";
import styles from "./product-card.module.css";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 480px) 100vw, 260px"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{product.category}</span>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <strong className={styles.price}>{formatCurrency(product.price)}</strong>
          <span className={styles.badge}>
            {product.available ? "Em estoque" : "Esgotado"}
          </span>
        </div>
      </div>
    </article>
  );
}
