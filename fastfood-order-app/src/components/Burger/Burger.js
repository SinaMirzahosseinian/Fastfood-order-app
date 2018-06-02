import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './Burgeringredients/Burgeringredient.js';

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="BreadTop" />
      <BurgerIngredient type="Cheese" />
      <BurgerIngredient type="Meat" />
      <BurgerIngredient type="BreadBottom" />
    </div>
  );
};

export default Burger;
