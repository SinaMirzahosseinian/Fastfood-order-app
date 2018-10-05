import React, { Component } from "react";
import classes from "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

export default class Burger extends Component {
  render() {
    return (
      <div className={classes.Burger}>
        <BurgerIngredients type="breadTop" />
        <BurgerIngredients type="cheese" />
        <BurgerIngredients type="meat" />
        <BurgerIngredients type="breadBottom" />
      </div>
    );
  }
}
