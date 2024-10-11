import  { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import './SkillsChart.css';

const data = [
  {
    name: 'React',
    level: 95,
    gradientId: 'gradient1',
  },
  {
    name: 'Design Systems',
    level: 90,
    gradientId: 'gradient2',
  },
  {
    name: 'Figma',
    level: 95,
    gradientId: 'gradient3',
  },
  {
    name: 'Unity',
    level: 75,
    gradientId: 'gradient4',
  },
  {
    name: 'League of Legends',
    level: 40,
    gradientId: 'gradient5',
  },
];

const SkillsChart = () => {
  const [animatedBars, setAnimatedBars] = useState([]);

  useEffect(() => {
    // Delay for adding the bounce effect to each bar
    const timeouts = [];
    data.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setAnimatedBars((prev) => [...prev, index]);
      }, index * 100); // Add a delay of 100ms for each bar's animation
      timeouts.push(timeout);
    });

    // Clean up timeouts
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2 className="skillsTitle">My Skills</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          {/* Définition des dégradés */}
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9ED2CB" stopOpacity={1} />
              <stop offset="100%" stopColor="#7CBEB8" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EAC6BB" stopOpacity={1} />
              <stop offset="100%" stopColor="#E1A292" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradient3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D3AE78" stopOpacity={1} />
              <stop offset="100%" stopColor="#B88B53" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradient4" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CAA16D" stopOpacity={1} />
              <stop offset="100%" stopColor="#A87B46" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="gradient5" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D56160" stopOpacity={1} />
              <stop offset="100%" stopColor="#B74A47" stopOpacity={1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="level" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                className={animatedBars.includes(index) ? 'bounce' : ''}
                fill={`url(#${entry.gradientId})`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;
