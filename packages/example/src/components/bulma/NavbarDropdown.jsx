import React, { useState } from "react";
import classnames from "classnames";

const NavbarDropdown = ({ children, isRight = false, name }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div
      className={classnames("navbar-item has-dropdown", {
        "is-active": isActive
      })}
    >
      <a
        className="navbar-link"
        onClick={() => {
          setActive(!isActive);
        }}
      >
        {name}
      </a>

      <div className={classnames("navbar-dropdown", { "is-right": isRight })}>
        {children}
      </div>
    </div>
  );
};

export default NavbarDropdown;
