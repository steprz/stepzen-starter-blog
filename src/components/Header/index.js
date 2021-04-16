import { Link } from 'react-router-dom';
import { React } from 'react';

const Header = () => {
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
