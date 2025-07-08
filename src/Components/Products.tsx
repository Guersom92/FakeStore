import "./Products.scss";
import type { ProductoType } from "../types";
import { useProducts } from "../hooks/UseProducts";
import { useCarrito } from "../hooks/UseCarrito";

const Product = ({ producto }: { producto: ProductoType }) => {
  const { addToCart } = useCarrito();
  return (
    <li>
      <img src={producto.thumbnail} alt="" />
      <div>
        <h3>{producto.title}</h3>
        <p>S/ {producto.price}</p>
      </div>
      <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
    </li>
  );
};

function Products() {
  const { productosActuales } = useProducts();

  return (
    <>
      <ul className="productos">
        {productosActuales.map((producto) => (
          <Product key={producto.id} producto={producto} />
        ))}
      </ul>
    </>
  );
}

export default Products;
