import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  state = {};
  render() {
    return (
      <div>
        <Burger />
        <div>Build controls</div>
      </div>
    );
  }
}

export default BurgerBuilder;
