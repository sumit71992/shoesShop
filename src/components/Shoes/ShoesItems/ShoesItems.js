import ShoesItemForm from "./ShoesItemForm";
import classes from "./ShoesItems.module.css";

const ShoesItems = (props) => {
  return (
    <li className={classes.shoe}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>$ {props.price.toFixed(2)}</div>
      </div>
      <div>
        <ShoesItemForm id={props.id} item={props}/>
      </div>
    </li>
  );
};

export default ShoesItems;
