import { createContext, useState } from "react";

const ProductContext = createContext(null);

const ProductProvider = function ({ children }) {
  const [product, setProduct] = useState(null);
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
export default ProductContext;
