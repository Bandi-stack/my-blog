import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <div className="navDiv">
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/tarak">
              Creator
            </Link>
            <Link className="navLink" to="/secret">
              Creator
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
