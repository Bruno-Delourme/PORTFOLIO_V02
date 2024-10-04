import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link> 
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link> 
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    );
};

export default Header;
