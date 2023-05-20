import { useContext, useState } from "react";
import classes from "./ShoesItems.module.css";
import CartContext from "../../../store/cartContext";

const ShoesItems = (props) => {
  const [ln, setLn] = useState(+props.l);
  const [mn, setMn] = useState(+props.m);
  const [sn, setSn] = useState(+props.s);
  const cartCtx = useContext(CartContext);

  const largeHandler = (event) => {
    event.preventDefault();
    if(ln<1){
      return alert("Selected Size is not available");
    }
    cartCtx.addItem({ ...props, quantity: "1" });
    setLn((prev) => {
      return prev - 1;
    });
  };
  const mediumHandler = (event) => {
    event.preventDefault();
    if(mn<1){
      return alert("Selected Size is not available")
    }
    cartCtx.addItem({ ...props, quantity: "1" });
    setMn((prev) => {
      return prev - 1;
    });
  };
  const smallHandler = (event) => {
    event.preventDefault();
    if(sn<1){
      return alert("Selected Size is not available")
    }
    cartCtx.addItem({ ...props, quantity: "1" });
    setSn((prev) => {
      return prev - 1;
    });
  };

  return (
    <li className={classes.shoe}>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>&#8377; {props.price}</div>
      <button onClick={largeHandler}>Buy Large ({ln})</button>
      <button onClick={mediumHandler}>Buy Medium ({mn})</button>
      <button onClick={smallHandler}>Buy Small ({sn})</button>
    </li>
  );
};

export default ShoesItems;
