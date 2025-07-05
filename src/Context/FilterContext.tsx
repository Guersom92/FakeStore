import { createContext, useState } from "react";
import type { Categories, FilterType, ProductoType } from "../types";

type FilterContextType = {
  filter: FilterType;
  changeCategory: (category: Categories) => void;
  changeMaxPrice: (maxPrice: number) => void;
  filterProducts: (products: ProductoType[]) => ProductoType[];
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<FilterType>({
    maxPrice: 700,
    category: "all",
  });

  const changeCategory = (category: Categories) => {
    setFilter({ ...filter, category });
  };
  const changeMaxPrice = (maxPrice: number) => {
    setFilter({ ...filter, maxPrice });
  };

  const filterProducts = (products: ProductoType[]) => {
    return products.filter(
      (producto) =>
        (producto.category === filter.category || filter.category === "all") &&
        producto.price <= filter.maxPrice
    );
  };
  return (
    <FilterContext.Provider
      value={{ filter, changeCategory, changeMaxPrice, filterProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
};
