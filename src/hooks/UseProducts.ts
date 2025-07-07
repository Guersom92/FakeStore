import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductsProvider");
    }
    const { productosActuales,changeCategory,changeMaxPrice,filter,paginaActual,siguientePagina,siguientePaginaDisabled,anteriorPagina } = context;
    return { productosActuales,changeCategory,changeMaxPrice, filter ,paginaActual,siguientePagina,siguientePaginaDisabled,anteriorPagina};
}