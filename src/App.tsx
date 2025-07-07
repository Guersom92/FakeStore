import Carrrito from "./Components/Carrrito";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import Paginacion from "./Components/Paginacion";
import Products from "./Components/Products";

const App: React.FC = () => {
  return (
    <>
      <Carrrito />
      <Header />
      <Filter />
      <Products />
      <Paginacion />
    </>
  );
};

export default App;
