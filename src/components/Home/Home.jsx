import './Home.css';
import designerImage from '../../assets/courbetBlanc.png';  
import coderImage from '../../assets/photoBlanc2.png';  
import { useState } from 'react';

const Home = () => {
    const [mousePosition, setMousePosition] = useState(50); // Initialisé à 50% (milieu)

    const handleMouseMove = (e) => {
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const newPosition = (mouseX / width) * 100;
        // Inverser la direction du mouvement du séparateur
        const invertedPosition = 100 - newPosition;
        setMousePosition(invertedPosition);
    };

    return (
      <>
        {/* Section avec effet de hover */}
        <section 
          className="image-reveal-section"
          onMouseMove={handleMouseMove}
        >
          <div className="imgContainer">
            {/* Image Designer (gauche) */}
            <div 
              className="imgLeft" 
              style={{
                clipPath: `polygon(0 0, ${mousePosition}% 0, ${mousePosition}% 100%, 0 100%)`,
              }}
            >
              <img src={designerImage} alt="Designer" />
              <div className="textLeft">
                <h2>Designer</h2>
                <h3>Product designer specialising in UI design and design systems.</h3>
              </div>
            </div>

            {/* Image Coder (droite) */}
            <div 
              className="imgRight"
              style={{
                clipPath: `polygon(${mousePosition}% 0, 100% 0, 100% 100%, ${mousePosition}% 100%)`,
              }}
            >
              <img src={coderImage} alt="Coder" />
              <div className="textRight">
                <h2>Developer</h2>
                <h3>Front-end developer who writes clean, elegant, and efficient code.</h3>
              </div>
            </div>

            {/* Séparateur central */}
            <div 
              className="separator" 
              style={{ left: `${mousePosition}%` }}
            ></div>
          </div>
        </section>
      </>
    );
};

export default Home;
