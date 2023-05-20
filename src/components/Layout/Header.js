import React from 'react';
import classes from './Header.module.css';
import headerImage from "../../assets/shoes.jpg";
import HeaderCartButoon from './HeaderCartButoon';

const Header = (props) =>{
  return (
    <>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButoon onShowCart={props.onShow} />
    </header>
    <div className={classes["header-image"]}>
        <img src={headerImage} alt="A table full of delicious food" />
    </div>
    </>
  )
}

export default Header;