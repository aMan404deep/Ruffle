// CartContext.js

import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const CartContext = createContext({
  product: [],
  addToCart: () => {},
  removeFromCart: () => {}
});

const CartContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const addToCart = (cart) => {
    setProduct((prevCart) => [...prevCart, cart]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...product];
    updatedCartItems.splice(index, 1);
    setProduct(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ product, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};

export { CartContextProvider, useCartContext };
