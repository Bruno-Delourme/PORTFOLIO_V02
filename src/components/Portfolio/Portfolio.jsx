import { useState, useEffect } from 'react';
import piMovies from '../../assets/piMovies.jpg'; // Import direct de l'image principale
import piMoviesHome from '../../assets/piMoviesHome.jpg';
import piMoviesMobHome from '../../assets/piMoviesMobHome.jpg';
import piMoviesMobile from '../../assets/piMoviesMobile.jpg';
import piMoviesMobZoom from '../../assets/piMoviesMobZoom.jpg';
import piMoviesZoom from '../../assets/piMoviesZoom.jpg';
import bandeDemo from '../../assets/bandeDemo.mp4';
import screenBandeDemo from '../../assets/screenBandeDemo.png'; // Image miniature
import './Portfolio.css';

// Utilisez le tableau d'images avec les imports
const images = [
  piMoviesHome,
  piMoviesMobHome,
  piMoviesMobile,
  piMoviesMobZoom,
  piMoviesZoom,
];

const Portfolio = () => {
  const [pop, setPop] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContent, setShowContent] = useState(false); // État pour l'animation
  const [isVideoOpen, setIsVideoOpen] = useState(false); // État pour gérer la modal vidéo

  useEffect(() => {
    // Déclencher l'animation après un léger délai
    setTimeout(() => {
      setShowContent(true);
    }, 500); // 500ms avant que l'animation ne commence
  }, []);

  // Fonction pour ouvrir/fermer le carrousel
  const toggleCarousel = () => {
    setIsCarouselOpen(!isCarouselOpen);
  };

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handlePopToggle = () => {
    setPop(!pop);
  };

  // Fonction pour ouvrir/fermer la modal vidéo
  const toggleVideoModal = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <div className="portfolio">
      {/* Header section avec la classe "show" pour l'animation */}
      <div className={`portfolio_container ${showContent ? 'show' : ''}`}>
        <h1>portfolio.</h1>
        <h2>Check out some of my latest design case studies.</h2>
        <h3>
          I’ve worked for startups, agencies, corporations, government and nasa.
          Just kidding. But as you can see :
          <h3>I&apos;have few projects, that I&apos;ve made on my own.</h3>
          <h4>Click on contact to check my dispo.</h4>
        </h3>
      </div>

      {/* Toggle for "Make it pop" */}
      <div className="pop-toggle">
        <label>
          <input type="checkbox" checked={pop} onChange={handlePopToggle} />
          Make it pop
        </label>
        <div className="slider">
          <div className="track"></div>
          <div className={`thumb ${pop ? 'active' : ''}`}></div>
        </div>
      </div>

      {/* Case study cards */}
      <div className="case-studies">
        <div className={`card ${pop ? 'pop' : ''}`}>
          <img
            src={piMovies}
            alt="Pi Movies"
            onClick={toggleCarousel} // Ouvrir le carrousel au clic
            style={{ cursor: 'pointer' }} // Indique que c'est cliquable
          />
          <div className="card-content">
            <h3>Rendu sur Figma</h3>
            <p>site API cinema</p>
          </div>
        </div>

        {/* Carte avec la vidéo (Projet 2) */}
        <div className={`card ${pop ? 'pop' : ''}`}>
          <img
            src={screenBandeDemo} // Utilisation de l'image miniature
            alt="Projet 2"
            onClick={toggleVideoModal} // Ouvrir la modal vidéo
            style={{ cursor: 'pointer' }}
          />
          <div className="card-content">
            <h3>Bande Demo</h3>
            <p>Motion Designer / FX</p>
          </div>
        </div>
      </div>

      {/* Modal vidéo */}
      {isVideoOpen && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="close-button" onClick={toggleVideoModal}>
              X
            </button>
            <video controls autoPlay className="video-player">
              <source src={bandeDemo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Carrousel */}
      {isCarouselOpen && (
        <div className="carousel">
          <button className="close-button" onClick={toggleCarousel}>
            X
          </button>
          <button className="prev-button" onClick={prevImage}>
            &#10094; {/* Flèche gauche */}
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="carousel-image"
          />
          <button className="next-button" onClick={nextImage}>
            &#10095; {/* Flèche droite */}
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
