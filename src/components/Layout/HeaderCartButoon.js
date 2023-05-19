import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import "font-awesome/css/font-awesome.min.css";
import CartContext from "../../store/cartContext";

function HeaderCartButoon(props) {
  const cartCtx = useContext(CartContext);

  let totalCartItems = 0;
  cartCtx.items.forEach((item) => {
    totalCartItems += +item.quantity;
  });

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <i className="fa fa-shopping-cart"></i>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
}

export default HeaderCartButoon;
