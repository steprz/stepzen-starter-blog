import { React } from "react";
import { Link } from "react-router-dom";

function DesktopMenu() {
  return (
    <div
      className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
      id="navbar-collapse"
    >
      <Link
        to="/"
        className="p-2 lg:px-4 md:mx-2 text-white rounded bg-primary-600"
      >
        Home
      </Link>
      <Link
        to="/blogs"
        className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
      >
        Page 2
      </Link>
      <a
        href="#"
        className="p-2 lg:px-4 md:mx-2 text-primary-600 text-center border border-transparent rounded hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300"
      >
        Login
      </a>
      <a
        href="#"
        className="p-2 lg:px-4 md:mx-2 text-primary-600 text-center border border-solid border-primary-600 rounded hover:bg-primary-600 hover:text-primary transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
      >
        Signup
      </a>
    </div>
  );
}

export default DesktopMenu;
