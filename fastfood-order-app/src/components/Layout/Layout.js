import React from 'react';
import classes from './Layout.css';
// const Fragment = React.Fragment;
const { Fragment } = React;

const Layout = (props) => {
  return (
    <Fragment>
      <div> toolbar , sidedrawer , backdrop </div>

      <main className={classes.fo}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
