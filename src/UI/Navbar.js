import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Active</li>
        </Link>
        <Link to="/completed">
          <li>Competed</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
