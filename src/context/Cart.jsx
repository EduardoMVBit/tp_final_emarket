import { createContext, useState, useContext } from "react";
import ProductsContext from "./Products";

const CartContext = createContext({ items: [], subtotal: 0 });

const CartProvider = function ({ children }) {
  const [cart, setCart] = useState({ items: [], subtotal: 0 });
  const { products } = useContext(ProductsContext);
  const siExiste = function (id) {
    if (cart.items.length > 0) {
      return (
        cart.items.find(function (item) {
          return item.id == id;
        }) != undefined
      );
    }
    return false;
  };
  const tieneCantidad = function (id) {
    if (cart.items.length > 0) {
      return (
        cart.items.find(function (item) {
          return item.id == id;
        }).cantidad > 1
      );
    }
    return false;
  };
  const agregar = function (id) {
    // si el producto ya esta
    if (siExiste(id)) {
      setCart({
        items: [...cart.items].map(function (item) {
          if (item.id == id) {
            item.cantidad += 1;
          }
          return item;
        }),
        subtotal: [...cart.items]
          .map(function (item) {
            return item.precio * item.cantidad;
          })
          .reduce(function (acumulador, actual) {
            return (acumulador += actual);
          }, 0),
      });
    } else {
      let producto = products.find(function (product) {
        return product.id == id;
      });
      setCart({
        items: [...cart.items, { ...producto, cantidad: 1 }],
        subtotal: [...cart.items]
          .map(function (item) {
            return item.precio * cantidad;
          })
          .reduce(function (acumulador, actual) {
            return (acumulador += actual);
          }, 0),
      });
    }
  };
  const actualizar = function (id, cantidad) {
    if (siExiste(id)) {
      setCart({
        items: [...cart.items].map(function (item) {
          if (item.id == id) {
            item.cantidad += cantidad;
          }
          return item;
        }),
        subtotal: [...cart.items]
          .map(function (item) {
            return item.precio * item.cantidad;
          })
          .reduce(function (acumulador, actual) {
            return (acumulador += actual);
          }, 0),
      });
    }
  };
  const eliminar = function (id) {
    if (siExiste(id) && tieneCantidad(id)) {
      setCart({
        items: [...cart.items].map(function (item) {
          if (item.id == id) {
            item.cantidad -= 1;
          }
          return item;
        }),
        subtotal: [...cart.items]
          .map(function (item) {
            return item.precio * item.cantidad;
          })
          .reduce(function (acumulador, actual) {
            return (acumulador += actual);
          }, 0),
      });
    } else {
      setCart({
        items: [...cart.items].filter(function (item) {
          item.id != id;
        }),
        subtotal: [...cart.items]
          .map(function (item) {
            return item.precio * item.cantidad;
          })
          .reduce(function (acumulador, actual) {
            return (acumulador += actual);
          }, 0),
      });
    }
  };
  return (
    <CartContext.Provider value={(cart, agregar, actualizar, eliminar)}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
