import React from "react";
import classes from "./Layout.css";

const Layout = props => {
  return (
    <div>
      <div className={classes.color}>toolbar , sidedrawer , backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </div>
  );
};

export default Layout;
