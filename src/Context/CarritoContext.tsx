import { createContext, useState } from "react";
import type { CartType, ProductoType } from "../types";

type CartContextType = {
  cart: CartType[] | [];
  addToCart: (newproduct: ProductoType) => void;
  clearCart: () => void;
};

export const CarritoContext = createContext<CartContextType | undefined>(
  undefined
);

export const CarritoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<CartType[] | []>([]);

  const addToCart = (newproduct: ProductoType) => {
    const productIndex = cart.findIndex(
      (product) => product.id === newproduct.id
    );

    if (productIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productIndex].cantidad += 1;
      return setCart(newCart);
    }

    setCart((prevCart) => [...prevCart, { ...newproduct, cantidad: 1 }]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CarritoContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CarritoContext.Provider>
  );
};
