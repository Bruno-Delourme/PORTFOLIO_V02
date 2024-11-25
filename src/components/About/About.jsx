import './About.css';
import PieChart from '../PieChart/PieChart';
import SkillsChart from '../SkillsChart/SkillsChart'; 


const About = () => {
  return (
    <>
      <div className="aboutPage">
        <h1 className="title">about.</h1> 

        <div className='resume'>
          <a href="/CV_25_11_24.jpg" download="CV_25_11_24.jpg" className="cv">
            <div className="cv-content">
              <img src="/miniCV.png" alt="Miniature du CV" className="cv-thumbnail" />
              <span className="cv-text">Download my resume</span>
            </div>
          </a>
        </div>
        
        <div className="aboutContainer">
          <div className="aboutContent">
            <div className="part partDesigner">
              <h2>Part designer</h2>
              <ul>
                <li>UI design</li>
                <li>UX design</li>
                <li>Design Systems</li>
                <li>Interaction design</li>
                <li>&quot;Making it pop&quot;</li>
              </ul>
            </div>

            <div className="pie-placeholder">
              <PieChart />
            </div>

            <div className="part partCoder">
              <h2>Part coder</h2>
              <ul>
                <li>Full Stack</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Swearing at my computer</li>
                <li>Hugging my dog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="skillsPage">
        <div className="skills-container">
          <SkillsChart />
        </div>
      </div>
    </>
  );
};

export default About;
