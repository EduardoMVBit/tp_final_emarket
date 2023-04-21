import { createContext, useState } from "react";
import catalogoData from "../data/products";

const ProductsContext = createContext();

const ProductsProvider = function ({ children }) {
  const [products, setProducts] = useState(catalogoData);
  const proximoId = function () {
    if (products.length == 0) {
      return 1;
    }
    return products[products.length - 1].id + 1;
  };
  const agregar = function ({ name, precio, descripcion, imagen, categoria }) {
    setProducts([
      ...products,
      { id: proximoId(), name, precio, descripcion, imagen, categoria },
    ]);
  };

  const eliminar = function (id) {
    setProducts(
      [...products].filter(function (product) {
        product.id != id;
      })
    );
  };

  return (
    <ProductsContext.Provider value={{ products, agregar, eliminar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };
export default ProductsContext;
