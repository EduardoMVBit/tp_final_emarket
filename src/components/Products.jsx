import React, { useContext } from "react";
import ProductContext from "../context/Product";
import ProductsContext from "../context/Products";
import SearchContext from "../context/Search";
import Product from "./Product";
import Search from "./Search";
const Products = function () {
  const { product, setProduct } = useContext(ProductContext);
  const { products } = useContext(ProductsContext);
  const { keyword } = useContext(SearchContext);
  return (
    <>
      {!product ? (
        <section>
          <h2>Products</h2>
          <Search />
          <ul>
            {keyword == null
              ? products.map(function (product) {
                  return (
                    <li
                      key={product.id}
                      onClick={function () {
                        setProduct(product);
                      }}
                    >
                      <picture>
                        <img src={product.imagen} alt="" />
                      </picture>
                      <h3>{product.name}</h3>
                    </li>
                  );
                })
              : products
                  .filter((product) =>
                    String(product.name)
                      .toLowerCase()
                      .includes(String(keyword).toLowerCase())
                  )
                  .map(function (product) {
                    return (
                      <li
                        key={product.id}
                        onClick={function () {
                          setProduct(product);
                        }}
                      >
                        <picture>
                          <img src={product.imagen} alt="" />
                        </picture>
                        <h3>{product.name}</h3>
                      </li>
                    );
                  })}
          </ul>
        </section>
      ) : (
        <Product />
      )}
    </>
  );
};

export default Products;
