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
        <nav id="mainNav" class="mainNav">
            <Link to="/" className="logo">
                StepZen Starter Blog
            </Link>
            <div class="container">
                <ul id="menu" class="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="#">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
