import  { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [pop, setPop] = useState(false);

  const handlePopToggle = () => {
    setPop(!pop);
  };

  return (
    <div className="portfolio">
      {/* Header section */}
      <div className="header">
        <h1>portfolio.</h1>
        <p><h2>Check out some of my latest design case studies.</h2></p>
        <p><h3>
          I’ve worked for startups, agencies, corporations, and government and
          have led projects to design products used by millions of people.
          </h3></p>
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
            src="https://via.placeholder.com/150"
            alt=""
          />
          <div className="card-content">
            <h3>Projet 1</h3>
            <p>lorem ipsum</p>
          </div>
        </div>
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
        <div className={`card ${pop ? 'pop' : ''}`}>
          <img
            src="https://via.placeholder.com/150"
            alt=""
          />
          <div className="card-content">
            <h3>Projet 4</h3>
            <p>lorem ipsum</p>
          </div>
        </div>
        <div className={`card ${pop ? 'pop' : ''}`}>
          <img
            src="https://via.placeholder.com/150"
            alt=""
          />
          <div className="card-content">
            <h3>Projet 4</h3>
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
