import { useProducts } from "../hooks/UseProducts";
import "./Paginacion.scss";

function Paginacion() {
  const {
    paginaActual,
    siguientePagina,
    anteriorPagina,
    siguientePaginaDisabled,
  } = useProducts();
  return (
    <footer className="paginacion">
      <button onClick={anteriorPagina} disabled={paginaActual <= 1}>
        Anterior
      </button>
      <span>{paginaActual}</span>
      <button onClick={siguientePagina} disabled={siguientePaginaDisabled}>
        Siguiente
      </button>
    </footer>
  );
}

export default Paginacion;
