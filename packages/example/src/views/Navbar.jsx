import React, { useContext } from "react";

import { StateContext } from "libraries/state-management";

const mapStateToProps = ({ state: { auth } }) => ({
  userId: auth.user && auth.user.id
});

const Navbar = () => {
  const { userId } = mapStateToProps(useContext(StateContext));

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">Framework Test</div>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">{userId}</div>
      </div>
    </nav>
  );
};

export default Navbar;
