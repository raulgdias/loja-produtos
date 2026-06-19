import type { Product } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Tênis de Corrida Explorer",
    description: "Leve, confortável e com amortecimento ideal para treinos diários.",
    price: 299.9,
    image: "/products/product-1.svg",
    category: "Esporte",
    available: true,
  },
  {
    id: "2",
    name: "Mochila Urbana Compacta",
    description: "Design minimalista com compartimento acolchoado para notebook.",
    price: 189.5,
    image: "/products/product-2.svg",
    category: "Acessórios",
    available: true,
  },
  {
    id: "3",
    name: "Fone de Ouvido Bluetooth",
    description: "Som equilibrado e bateria de longa duração para uso diário.",
    price: 429.0,
    image: "/products/product-3.svg",
    category: "Eletrônicos",
    available: false,
  },
  {
    id: "4",
    name: "Camisa Casual Slim Fit",
    description: "Material leve e caimento moderno para o dia a dia.",
    price: 129.99,
    image: "/products/product-4.svg",
    category: "Moda",
    available: true,
  },
];
