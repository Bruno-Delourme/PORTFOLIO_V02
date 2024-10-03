import { useState } from 'react';
import './Home.css';
import designerImage from '../../../public/courbet.jpg';  
import coderImage from '../../../public/photo.jpg';  

const Home = () => {
    const [mouseX, setMouseX] = useState(50); // La position de la souris en pourcentage
  
    const handleMouseMove = (e) => {
      const { clientX } = e;
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const newMouseX = ((clientX - left) / width) * 100; 
      setMouseX(newMouseX);  // Calcul direct sans inversion ici
    };
  
    return (
      <section className="home-section" onMouseMove={handleMouseMove}>
        <div className="image-container">
          {/* Image Designer */}
          <div
            className="image designer"
            style={{
              clipPath: `inset(0 ${mouseX}% 0 0)`,
            }}
          >
            <img src={designerImage} alt="Designer" />
          </div>
  
          {/* Image Coder */}
          <div
            className="image coder"
            style={{
              clipPath: `inset(0 0 0 ${100 - mouseX}%)`,
            }}
          >
            <img src={coderImage} alt="Coder" />
          </div>
  
          {/* Ligne de séparation */}
          <div className="separator" style={{ left: `${100 - mouseX}%` }}></div>
  
          {/* Texte sur les images */}
          <div className="text-container">
            {/* Texte Designer */}
            <div
              className="text designer-text"
              style={{
                opacity: `${mouseX < 50 ? (50 - mouseX) / 50 : 1}`,
                transition: 'opacity 0.4s ease',
              }} // Disparaît quand on va à droite
            >
              <h2>Designer</h2>
              <p>Product designer specialising in UI design and design systems.</p>
            </div>
  
            {/* Texte Coder */}
            <div
              className="text coder-text"
              style={{
                opacity: `${mouseX > 50 ? (mouseX - 50) / 50 : 1}`,
                transition: 'opacity 0.4s ease',
              }} // Disparaît quand on va à gauche
            >
              <h2>&lt;Coder&gt;</h2>
              <p>Front end developer who writes clean, elegant and efficient code.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default Home;
