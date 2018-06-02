import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger.js';
const { Fragment } = React;

export default class BurgerBuilder extends Component {
  render() {
    return (
      <Fragment>
        <Burger />
        <div> Build Control </div>
      </Fragment>
    );
  }
}
