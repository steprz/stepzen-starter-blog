import { Link } from 'react-router-dom';
import { React } from 'react';

const Header = () => {
  return (
    <nav id="mainNav" className="mainNav">
      <Link to="/" className="logo">
        StepZen Starter Blog
      </Link>
      <div className="container">
        <ul id="menu" className="menu">
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
