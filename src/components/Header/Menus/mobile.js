import { React } from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <div
      id="navbar-collapse"
    >
      <Link
        to="/"
      >
        Home
      </Link>
      <Link
        to="/blogs"
      >
        Page 2
      </Link>
      <a
        href="#"
      >
        Login
      </a>
      <a
        href="#"
      >
        Signup
      </a>
    </div>
  );
}

export default MobileMenu;
