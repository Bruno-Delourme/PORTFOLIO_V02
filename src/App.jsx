import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

// Composant séparé pour utiliser useLocation
function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {!isHome && <Footer />}
    </div>
  );
}

// Composant App principal avec le Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
