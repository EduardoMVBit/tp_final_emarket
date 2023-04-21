import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UsersProvider } from "./context/Users";
import { UserProvider } from "./context/User";
import { ProductsProvider } from "./context/Products";
import { SearchProvider } from "./context/Search";
import { ProductProvider } from "./context/Product";
import { CartProvider } from "./context/Cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersProvider>
      <UserProvider>
        <ProductsProvider>
          <SearchProvider>
            <ProductProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </ProductProvider>
          </SearchProvider>
        </ProductsProvider>
      </UserProvider>
    </UsersProvider>
  </React.StrictMode>
);
