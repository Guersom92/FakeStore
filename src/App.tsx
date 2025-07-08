import Carrrito from "./Components/Carrrito";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import Paginacion from "./Components/Paginacion";
import Products from "./Components/Products";
import { CarritoProvider } from "./Context/CarritoContext";

const App: React.FC = () => {
  return (
    <>
      <CarritoProvider>
        <Carrrito />
        <Header />
        <Filter />
        <Products />
        <Paginacion />
      </CarritoProvider>
    </>
  );
};

export default App;
