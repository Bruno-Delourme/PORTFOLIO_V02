import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';
import designerImage from '../../assets/courbet.jpg';  
import coderImage from '../../assets/photo.jpg';  

const Home = () => {
    const [mouseX, setMouseX] = useState(40); // Position de la souris initialisée à 40%
    const [isHovering, setIsHovering] = useState(false); // Gérer si la souris est sur l'image
    const navigate = useNavigate();  // Initialisation de useNavigate pour gérer la navigation
  
    const handleMouseMove = (e) => {
      if (!isHovering) return; // Si la souris n'est pas sur l'image, ne fais rien
      const { clientX } = e;
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const newMouseX = ((clientX - left) / width) * 100; 
      setMouseX(newMouseX); // Mettre à jour la position du séparateur seulement si on survole l'image
    };

    // Fonction pour rediriger vers la page "Designer"
    const goToDesignerPage = () => {
      navigate('/designer');
    };

    // Fonction pour rediriger vers la page "Coder"
    const goToCoderPage = () => {
      navigate('/coder');
    };
  
    return (
      <>
        {/* Première section */}
        <section 
          className="home-section" 
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)} // Activer quand la souris entre
          onMouseLeave={() => setIsHovering(false)} // Désactiver quand la souris sort
        >
          <div className="image-container">
            {/* Image Designer */}
            <div
              className="image designer"
              onClick={goToDesignerPage} // Événement de clic pour rediriger vers Designer
              style={{
                clipPath: `inset(0 ${mouseX}% 0 0)`,
                cursor: 'pointer',
                transition: 'clip-path 1s ease', // Transition plus lente
              }}
            >
              <img src={designerImage} alt="Designer" />
            </div>
    
            {/* Image Coder */}
            <div
              className="image coder"
              onClick={goToCoderPage} // Événement de clic pour rediriger vers Coder
              style={{
                clipPath: `inset(0 0 0 ${100 - mouseX}%)`,
                cursor: 'pointer',
                transition: 'clip-path 1s ease', // Transition plus lente
              }}
            >
              <img src={coderImage} alt="Coder" />
            </div>
    
            {/* Ligne de séparation entre les deux images*/}
            <div 
              className="separator" 
              style={{ 
                left: `${100 - mouseX}%`,
                transition: 'left 1s ease', // Transition plus lente pour le séparateur
              }}
            ></div>
    
            {/* Texte sur les images */}
            <div className="text_container">
              {/* Texte Designer */}
              <div
                className="text designer-text"
                style={{
                  opacity: mouseX > 50 ? (50 - mouseX) / 50 : 1,
                  transition: 'opacity 1s ease', // Transition plus lente pour le texte
                }} 
              >
                <h2>Designe</h2>
                <h3>Product designer specialising in UI design and design systems.</h3>
              </div>
    
              {/* Texte Coder */}
              <div
                className="text coder-text"
                style={{
                  opacity: mouseX < 50 ? (mouseX - 50) / 50 : 1,
                  transition: 'opacity 1s ease', // Transition plus lente pour le texte
                }}
              >
                <h2>&lt;Code&gt;</h2>
                <h3>Front end developer who writes clean, elegant and efficient code.</h3>
              </div>
            </div>
          </div>
        </section>
  
        {/* Section ABOUT */}
        <section className="about">
          <h1>About.</h1>
          <p><h3>Full-stack web and mobile developer, recently graduated, I specialize in both front-end and back-end development using modern technologies such as JavaScript, React, and Node.js. With several concrete projects and a solid background in motion design, I combine technical skills with a creative approach. Driven by innovation and problem-solving, I am passionate about developing optimized digital solutions tailored to users needs.</h3></p>
        </section>
      </>
    );
};

export default Home;
