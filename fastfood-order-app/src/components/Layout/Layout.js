import React from 'react';
const Fragment = React.Fragment;

const Layout = (props) => {
  return (
    <Fragment>
      <div> toolbar , sidedrawer , backdrop </div>

      <main> {props.children} </main>
    </Fragment>
  );
};

export default Layout;
