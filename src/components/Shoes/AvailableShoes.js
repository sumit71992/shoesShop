import classes from "./AvailableShoes.module.css";
import Card from "../UI/Card";
import ShoesItems from "./ShoesItems/ShoesItems";
import AddShoesForm from "./ShoesItems/AddShoesForm";
import { useState } from "react";

const AvailableShoes = () => {
  const [allShoes, setAllShoes] = useState([]);

  const addShoesHandler = (shoe) => {
    setAllShoes((prevShoe) => {
      return [...prevShoe, shoe];
    });
  };

  return (
    <section className={classes.shoes}>
      <Card>
        <AddShoesForm onAddShoe={addShoesHandler} />
      </Card>
      {allShoes.length > 0 && (
        <Card>
          <ul>
            {allShoes.map((shoe) => (
              <ShoesItems
                key={shoe.id}
                id={shoe.id}
                name={shoe.name}
                description={shoe.description}
                price={shoe.price}
                l={shoe.l}
                m={shoe.m}
                s={shoe.s}
              />
            ))}
          </ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableShoes;
