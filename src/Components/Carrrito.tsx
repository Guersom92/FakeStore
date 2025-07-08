import { CartIcon, ClearCartIcon } from "./Icons";
import "./Carrito.scss";
import { useCarrito } from "../hooks/UseCarrito";

function Carrrito() {
  const { cart, clearCart, addToCart } = useCarrito();

  return (
    <>
      <label className="boton-carrito" htmlFor="carro">
        <CartIcon />
      </label>
      <input hidden type="checkbox" id="carro" />
      <aside className="carrito">
        <ul>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt="" />
                <div>
                  <strong>{product.title}</strong> S/ {product.price}
                </div>
                <footer>
                  <small>ctd: {product.cantidad}</small>
                  <button onClick={() => addToCart(product)}>+</button>
                </footer>
              </li>
            );
          })}
        </ul>
        <button className="clearButton" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}

export default Carrrito;
