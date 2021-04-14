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
    <div>
      <nav>
        <div>
          <div>
            <Link to="/">
              StepZen Starter Blog
            </Link>
            <button
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
