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

  const orderItemHandler = () => {
    setItems((prev)=>{
      return [];
    });
  };

  const cartContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    orderItem: orderItemHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
