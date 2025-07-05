import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { ProductsProvider } from "./Context/ProductsContext.tsx";
import { FilterProvider } from "./Context/FilterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <FilterProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </FilterProvider>
);
