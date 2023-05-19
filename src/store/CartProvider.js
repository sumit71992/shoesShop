import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemHandler = (item) => {
    setItems((prevItems) => {
      if (prevItems.length < 1) {
        return [...items, item];
      } else {
        for (let i = 0; i < prevItems.length; i++) {
          if (prevItems[i].id === item.id) {
            prevItems[i].quantity = +prevItems[i].quantity + +item.quantity;
            return [...prevItems];
          }
        }
        return [...prevItems, item];
      }
    });
  };
  const removeItemHandler = (id) => {
    const arr = items.filter((el) => {
      return el.id !== id;
    });
    setItems(arr);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
