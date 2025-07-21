import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    if (cartItems.find((availItem) => availItem.id === item.id)) return;
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function onRemove(property) {
    const cartDelete = cartItems.filter(
      (prevProperty) => prevProperty.image !== property.image
    );
    setCartItems(cartDelete);
  }

  function clearCart() {
    return setCartItems([]);
  }
  return (
    <AppContext.Provider value={{ cartItems, addToCart, onRemove, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;
