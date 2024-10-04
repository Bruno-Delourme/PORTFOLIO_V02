import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Designer from './components/Designer/Designer'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Définition des Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          
          <Route path="/designer" element={<Designer />} /> 
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
