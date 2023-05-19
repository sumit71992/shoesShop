import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let totalAmount = 0;

  cartCtx.items.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });

  const removeCartHandler = (event) => {
    cartCtx.removeItem(event.target.id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li id={item.id}>
          <div>
            <div>{item.name} </div>
            <div className={classes["cart-items-details"]}>
              <div className={classes["cart-items-price"]}>
                $ {item.price.toFixed(2)}
              </div>
              <div className={classes.quantity}>x {item.quantity}</div>
            </div>
          </div>
          <div>
            <button
              id={item.id}
              className={classes.minus}
              onClick={removeCartHandler}
            >
              -
            </button>
            <button>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.close} onClick={props.onHide}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
