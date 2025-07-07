import "./Filter.scss";
import { useProducts } from "../hooks/UseProducts";
import type { Categories } from "../types";

function Filter() {
  const { filter, changeMaxPrice, changeCategory } = useProducts();
  return (
    <section className="filtros">
      <div>
        <label htmlFor="precioMax">Precio Máximo:</label>
        <input
          value={filter.maxPrice}
          id="precioMax"
          min={0}
          max={2500}
          onChange={(e) => changeMaxPrice(Number(e.target.value))}
          type="range"
        />
        <span>S/ {filter.maxPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoría: </label>
        <select
          onChange={(e) => changeCategory(e.target.value as Categories)}
          id="category"
        >
          <option value="all">Todo</option>
          <option value="beauty">Belleza</option>
          <option value="fragrances">Fragancias</option>
          <option value="furniture">Muebles</option>
          <option value="groceries">Comestibles</option>
        </select>
      </div>
    </section>
  );
}

export default Filter;
