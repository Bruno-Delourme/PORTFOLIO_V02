import { useState, useEffect } from 'react';
import piMovies from '../../assets/piMovies.jpg'; // Import direct de l'image principale
import piMoviesHome from '../../assets/piMoviesHome.jpg';
import piMoviesMobHome from '../../assets/piMoviesMobHome.jpg';
import piMoviesMobile from '../../assets/piMoviesMobile.jpg';
import piMoviesMobZoom from '../../assets/piMoviesMobZoom.jpg';
import piMoviesZoom from '../../assets/piMoviesZoom.jpg';
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

  return (
    <div className="portfolio">
      {/* Header section avec la classe "show" pour l'animation */}
      <div className={`portfolio-container ${showContent ? 'show' : ''}`}>
        <h1>portfolio.</h1>
        <h2>Check out some of my latest design case studies.</h2>
        <h3>
          I’ve worked for startups, agencies, corporations, government and nasa.
          Just kidding. But as you can see
          <p> I&apos;have few projects, that I&apos;ve made on my own.</p>
          Click on contact to check my dispo.
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
        {/* Autres cartes */}
        <div className={`card ${pop ? 'pop' : ''}`}>
          <img src="https://via.placeholder.com/150" alt="" />
          <div className="card-content">
            <h3>Projet 2</h3>
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>

      {/* More case studies */}
      <div className="more-studies">
        <div className={`card ${pop ? 'pop' : ''}`}>
          <img src="https://via.placeholder.com/150" alt="" />
          <div className="card-content">
            <h3>Projet 3</h3>
          </div>
        </div>
        {/* Autres cartes */}
      </div>

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
