import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { ProductsProvider } from "./Context/ProductsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
