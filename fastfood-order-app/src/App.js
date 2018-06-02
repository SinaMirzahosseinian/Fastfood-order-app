import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js';
import BurgerBuilder from './containers/Burgerbuilder/BurgerBuilder.js';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
