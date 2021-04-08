import { Link } from "react-router-dom";
import { React, useState } from "react";

import DesktopMenu from "./Menus/desktop";
import MobileMenu from "./Menus/mobile";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMobile = () => {
    setToggle(!toggle);
  };

  return (
    <div className="header-2">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-bold text-xl text-primary-600">
              StepZen Starter Blog
            </Link>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
              onClick={toggleMobile}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          {toggle ? <MobileMenu /> : null}
          <DesktopMenu />
        </div>
      </nav>
    </div>
  );
};

export default Header;
