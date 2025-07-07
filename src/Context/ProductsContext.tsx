import { createContext, useEffect, useState } from "react";
import { getAll } from "../services/producto";
import type { Categories, FilterType, ProductoType } from "../types";
import Loading from "../Components/Loading";

type ProductContextType = {
  productosActuales: ProductoType[];
  filter: FilterType;
  changeCategory: (category: Categories) => void;
  changeMaxPrice: (maxPrice: number) => void;
  paginaActual: number;
  siguientePagina: () => void;
  siguientePaginaDisabled: boolean;
  anteriorPagina: () => void;
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
  const [paginaActual, setPaginaActual] = useState(1);
  const [productosPorPagina, serProductosPorPagina] = useState(8);
  const [filter, setFilter] = useState<FilterType>({
    maxPrice: 700,
    category: "all",
  });

  useEffect(() => {
    getAll().then((response) => {
      setProducts(response.products);
      setLoading(false);
    });
  }, []);

  const changeCategory = (category: Categories) => {
    setFilter({ ...filter, category });
  };
  const changeMaxPrice = (maxPrice: number) => {
    setFilter({ ...filter, maxPrice });
  };

  const filteredProducts = products.filter(
    (producto) =>
      (producto.category === filter.category || filter.category === "all") &&
      producto.price <= filter.maxPrice
  );

  const ultimoIndice = paginaActual * productosPorPagina;
  const primerIndice = ultimoIndice - productosPorPagina;
  const productosActuales = filteredProducts.slice(primerIndice, ultimoIndice);

  const siguientePaginaDisabled =
    filteredProducts.length / (paginaActual * productosPorPagina) < 1;

  const siguientePagina = () => {
    if (siguientePaginaDisabled) return;
    setPaginaActual((prevPag) => prevPag + 1);
  };

  const anteriorPagina = () => {
    if (paginaActual > 1) {
      setPaginaActual((prevPag) => prevPag - 1);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        productosActuales,
        changeCategory,
        changeMaxPrice,
        filter,
        paginaActual,
        siguientePagina,
        siguientePaginaDisabled,
        anteriorPagina,
      }}
    >
      {loading ? <Loading /> : children}
    </ProductsContext.Provider>
  );
};
