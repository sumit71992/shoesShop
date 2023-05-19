import classes from "./AvailableShoes.module.css";
import Card from "../UI/Card";
import MealItems from "./ShoesItems/ShoesItems";

const DUMMY_SHOES = [
  
];

const AvailableShoes = () => {
  return (
    <section className={classes.shoes}>
      <Card>
        <ul>
          {DUMMY_SHOES.map((meal) => (
            <MealItems
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableShoes;
