import { ProductList } from "@/components/ProductList";
import { getProducts } from "@/lib/productService";
import styles from "./page.module.css";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>Loja de Produtos</span>
          <h1 className={styles.title}>Uma base limpa para sua loja em Next.js</h1>
          <p className={styles.description}>
            Estrutura pensada para estudar boas práticas de front-end, tipos
            e integração futura com mocks ou APIs reais.
          </p>
        </div>
      </section>

      <section className={styles.catalog}>
        <div className={styles.catalogHeader}>
          <h2>Produtos em destaque</h2>
          <p>Consuma dados via mock ou API externa com a mesma camada de serviço.</p>
        </div>

        <ProductList products={products} />
      </section>
    </main>
  );
}
