import { createContext, useEffect, useState } from "react";
import { getAll } from "../services/producto";
import type { ProductoType } from "../types";
import Loading from "../Components/Loading";

type ProductContextType = {
  products: ProductoType[];
};

export const ProductsContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<ProductoType[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAll().then((response) => {
      setProducts(response.products);
      setLoading(false);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {loading ? <Loading /> : children}
    </ProductsContext.Provider>
  );
};
