import { useProducts } from "../hooks/UseProducts";
import "./Products.scss";
import type { ProductoType } from "../types";
import { UseFilter } from "../hooks/UseFilter";

const Product = ({ producto }: { producto: ProductoType }) => {
  return (
    <li>
      <img src={producto.thumbnail} alt="" />
      <div>
        <h2>{producto.title}</h2>
        <p>{producto.description.substring(0, 20)}...</p>
        <p>S/ {producto.price}</p>
      </div>
      <button>Agregar al carrito</button>
    </li>
  );
};

function Products() {
  const { products } = useProducts();
  const { filterProducts } = UseFilter();

  const filteredProducts = filterProducts(products);
  return (
    <>
      <ul>
        {filteredProducts.map((producto) => (
          <Product key={producto.id} producto={producto} />
        ))}
      </ul>
    </>
  );
}

export default Products;
