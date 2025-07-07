import "./Products.scss";
import type { ProductoType } from "../types";
import { useProducts } from "../hooks/UseProducts";

const Product = ({ producto }: { producto: ProductoType }) => {
  return (
    <li>
      <img src={producto.thumbnail} alt="" />
      <div>
        <h3>{producto.title}</h3>
        <p>{producto.description.substring(0, 25)}...</p>
        <p>S/ {producto.price}</p>
      </div>
      <button>Agregar al carrito</button>
    </li>
  );
};

function Products() {
  const { productosActuales } = useProducts();

  return (
    <>
      <ul>
        {productosActuales.map((producto) => (
          <Product key={producto.id} producto={producto} />
        ))}
      </ul>
    </>
  );
}

export default Products;
