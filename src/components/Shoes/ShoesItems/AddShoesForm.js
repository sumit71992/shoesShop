import classes from "./AddShoesForm.module.css";
import Input from "../../UI/Input";

const AddShoesForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    if(event.target.name.value==="" || event.target.description.value==="" || event.target.price.value===""){
        return alert("Please fill all details correctly");
    }
    const obj = {
      id: Math.random().toString(),
      name: event.target.name.value,
      description: event.target.description.value,
      price: event.target.price.value,
      l: event.target.l.value,
      m: event.target.m.value,
      s: event.target.s.value,
    };
    return props.onAddShoe(obj);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <Input
          label={"ShoesName"}
          input={{
            id: "name",
            type: "text",
          }}
        />
      </div>
      <div className={classes.input}>
        <Input
          label={"Description"}
          input={{
            id: "description",
            type: "text",
          }}
        />
      </div>
      <div className={classes.input}>
        <Input
          label={"Price"}
          input={{
            id: "price",
            type: "number",
          }}
        />
      </div>
      <div className={classes.input}>
        <Input
          label={"L"}
          input={{
            id: "l",
            type: "number",
            min: "0",
            step: "1",
            defaultValue: "0",
          }}
        />
      </div>
      <div className={classes.input}>
        <Input
          label={"M"}
          input={{
            id: "m",
            type: "number",
            min: "0",
            step: "1",
            defaultValue: "0",
          }}
        />
      </div>
      <div className={classes.input}>
        <Input
          label={"S"}
          input={{
            id: "s",
            type: "number",
            min: "0",
            step: "1",
            defaultValue: "0",
          }}
        />
      </div>
      <button type="submit">Add Shoes</button>
    </form>
  );
};

export default AddShoesForm;
