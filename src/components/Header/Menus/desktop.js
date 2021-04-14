import { React } from "react";
import { Link } from "react-router-dom";

function DesktopMenu() {
  return (
    <header role="banner">
    <div
      id="navbar-collapse"
    >
      <p>
      <Link
        to="/"
      >
        Home
      </Link>
      </p>
      <p>
      <Link
        to="/blogs"
      >
        Page 2
      </Link>
      </p>
      <p>
      <a
        href="#"
      >
        Login
      </a>
      </p>
      <p>
      <a
        href="#"
      >
        Signup
      </a>
      </p>
    </div>
    </header>
  );
}

export default DesktopMenu;
