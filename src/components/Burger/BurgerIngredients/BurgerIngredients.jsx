import React, { Component } from "react";
import classes from "./BurgerIngredients.css";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "breadBottom":
        ingredient = <div className={classes.breadBottom} />;
        break;
      case "breadTop":
        ingredient = (
          <div className={classes.breadTop}>
            <div className={classes.seeds1} />
            <div className={classes.seeds2} />
            <div className={classes.seeds1} />
            <div className={classes.seeds2} />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.meat} />;
        break;
      case "cheese":
        ingredient = <div className={classes.cheese} />;
        break;
      case "bacon":
        ingredient = <div className={classes.bacon} />;
        break;
      case "salad":
        ingredient = <div className={classes.salad} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

export default BurgerIngredients;
