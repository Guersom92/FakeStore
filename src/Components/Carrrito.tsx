import { CartIcon } from "./Icons";
import "./Carrito.scss";

function Carrrito() {
  return (
    <>
      <label className="boton-carrito" htmlFor="carro">
        <CartIcon />
      </label>
      <input hidden type="checkbox" id="carro" />
      <aside className="carrito">
        <ul>
          <li>
            <img
              src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
              alt=""
            />
            <div>
              <strong>perfume</strong> S/ 5454
            </div>
            <footer>
              <small>qt1: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Carrrito;
