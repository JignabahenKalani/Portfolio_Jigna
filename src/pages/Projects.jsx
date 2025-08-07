import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/JignabahenKalani/repos')
      .then(res => setRepos(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {repos.map(repo => (
          <div className="project-card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || 'No description provided.'}</p>
            <div className="project-buttons">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                Code
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn demo-btn"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
