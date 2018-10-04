import React from "react";
import Aux from "../../hoc/aux";

const Layout = props => {
  return (
    <Aux>
      <div>toolbar , sidedrawer , backdrop</div>
      <main>{props.children}</main>
    </Aux>
  );
};

Layout.propTypes = {};

export default Layout;
