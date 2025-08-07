import React, { useState } from 'react';

const skillsData = {
  frontend: [
    { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  ],
  backend: [
    { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  ],
  tools: [
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  ],
};

const categoryTitles = {
  frontend: 'Frontend',
  backend: 'Back-End',
  tools: 'Tools',
};

const Skills = () => {
  const [selected, setSelected] = useState('all');

  const displaySkills =
    selected === 'all'
      ? skillsData
      : { [selected]: skillsData[selected] };

  return (
    <section className="home-container">
      <div className="home-content skills-section">
        <h2>Skills</h2>

        <div className="skills-buttons">
          <button
            className={selected === 'all' ? 'active' : ''}
            onClick={() => setSelected('all')}
          >
            All
          </button>
          <button
            className={selected === 'frontend' ? 'active' : ''}
            onClick={() => setSelected('frontend')}
          >
            Frontend
          </button>
          <button
            className={selected === 'backend' ? 'active' : ''}
            onClick={() => setSelected('backend')}
          >
            Backend
          </button>
          <button
            className={selected === 'tools' ? 'active' : ''}
            onClick={() => setSelected('tools')}
          >
            Tools
          </button>
        </div>

        <div className="skills-grid">
          {Object.entries(displaySkills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3>{categoryTitles[category]}</h3>
              <div className="skill-items">
                {skills.map(({ name, url }) => (
                  <div key={name} className="skill-item">
                    <img src={url} alt={`${name} icon`} loading="lazy" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
