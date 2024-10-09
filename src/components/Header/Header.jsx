import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">
            <h1>PORTFOLIO</h1>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/">HOME</Link> 
          <Link to="/about">ABOUT</Link>
          <Link to="/portfolio">PORTFOLIO</Link> 
          <Link to="/contact">CONTACT</Link>
        </nav>
      </header>
    );
};

export default Header;
