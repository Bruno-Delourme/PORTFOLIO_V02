import './About.css';
import PieChart from '../PieChart/PieChart'

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        {/* Part Designer */}
        <div className="part part-designer">
          <h2>Part designer</h2>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Design Systems</li>
            <li>Interaction design</li>
            <li>&quot;Making it pop&quot;</li>
          </ul>
        </div>

        {/* Placeholder for Pie Chart */}
        <div className="pie-placeholder">
        <PieChart />
        </div>

        {/* Part Coder */}
        <div className="part part-coder">
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
  );
};

export default About;
