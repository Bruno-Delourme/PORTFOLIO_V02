import './Header.css';

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    );
  };
  
  export default Header;