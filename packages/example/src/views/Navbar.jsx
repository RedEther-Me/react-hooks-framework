import React, { useContext } from "react";

import { StateContext } from "libraries/state-management";

import NavbarDropdown from "components/bulma/NavbarDropdown";

import { logout } from "actions/auth";

const mapStateToProps = ({ auth }) => {
  if (auth.user) {
    const { name } = auth.user;

    return {
      authenticated: auth.authenticated,
      name
    };
  }

  return {
    authenticated: auth.authenticated
  };
};

const Navbar = () => {
  const { state, dispatch } = useContext(StateContext);
  const { authenticated, name } = mapStateToProps(state);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">Framework Test</div>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      {authenticated && (
        <div className="navbar-end">
          <NavbarDropdown isRight name={name}>
            <a className="navbar-item">My Profile</a>
            <a className="navbar-item" onClick={() => dispatch(logout())}>
              Log out
            </a>
          </NavbarDropdown>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
