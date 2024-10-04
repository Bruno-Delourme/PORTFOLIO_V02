import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';
import designerImage from '../../assets/courbet.jpg';  
import coderImage from '../../assets/photo.jpg';  

const Home = () => {
    const [mouseX, setMouseX] = useState(50); // Position de la souris en pourcentage
    const navigate = useNavigate();  // Initialisation de useNavigate pour gérer la navigation
  
    const handleMouseMove = (e) => {
      const { clientX } = e;
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const newMouseX = ((clientX - left) / width) * 100; 
      setMouseX(newMouseX);  // Calcul direct sans inversion ici
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
        <section className="home-section" onMouseMove={handleMouseMove}>
          <div className="image-container">
            {/* Image Designer */}
            <div
              className="image designer"
              onClick={goToDesignerPage} // Événement de clic pour rediriger vers Designer
              style={{
                clipPath: `inset(0 ${mouseX}% 0 0)`,
                cursor: 'pointer' 
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
                cursor: 'pointer' 
              }}
            >
              <img src={coderImage} alt="Coder" />
            </div>
    
            {/* Ligne de séparation entre les deux images*/}
            <div className="separator" style={{ left: `${100 - mouseX}%` }}></div>
    
            {/* Texte sur les images */}
            <div className="text-container">
              {/* Texte Designer */}
              <div
                className="text designer-text"
                style={{
                  opacity: mouseX < 50 ? (50 - mouseX) / 50 : 1,
                  transition: 'opacity 0.4s ease',
                }} // Disparaît quand on va à droite
              >
                <h2>Designer</h2>
                <h3>Product designer specialising in UI design and design systems.</h3>
              </div>
    
              {/* Texte Coder */}
              <div
                className="text coder-text"
                style={{
                  opacity: mouseX > 50 ? (mouseX - 50) / 50 : 1,
                  transition: 'opacity 0.4s ease',
                }} // Disparaît quand on va à gauche
              >
                <h2>&lt;Coder&gt;</h2>
                <h3>Front end developer who writes clean, elegant and efficient code.</h3>
              </div>
            </div>
          </div>
        </section>
  
        {/* Section ABOUT */}
        <section className="About">
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ultricies ligula, vel sagittis neque. Nulla facilisi. Sed vel tellus at velit fermentum, non fermentum neque faucibus. Maecenas vel dui vel urna consectetur sagittis. Maecenas ultricies ipsum nec velit scelerisque, vel iaculis nisi consectetur. Sed non est vel dui commodo tristique.</p>
          <p>Ut vel nunc vel justo dignissim semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Donec vel ipsum sed justo tristique bibendum. Vestibulum vel velit id diam faucibus volutpat. Donec facilisis auctor urna, non tincidunt ipsum pellentesque at.</p>
        </section>
      </>
    );
};

export default Home;
