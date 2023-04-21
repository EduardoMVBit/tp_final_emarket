import React, { useContext } from "react";
import ProductContext from "../context/Product";
import CartContext from "../context/Cart";

const Product = function () {
  const { product, setProduct } = useContext(ProductContext);
  const { agregar } = useContext(CartContext);
  return (
    <article>
      <form
        onSubmit={function () {
          setProduct(null);
        }}
      >
        <button>cerrar</button>
      </form>
      <h2>
        {product.name} - U$D{product.precio}
      </h2>
      <p>{product.descripcion}</p>
      <picture>
        <img src={product.imagen} alt="" />
      </picture>
      <form
        onSubmit={function () {
          agregar(product.id);
        }}
      >
        <button>agregar</button>
      </form>
    </article>
  );
};

export default Product;
