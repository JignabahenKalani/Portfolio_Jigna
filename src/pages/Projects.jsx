import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch your repos
        const myRepos = await axios.get('https://api.github.com/users/JignabahenKalani/repos');
        
        // Fetch collaboration repo directly
        const collabRepo = await axios.get('https://api.github.com/repos/JamesBampton/gurus-travel-blog');
        
        // Merge them together
        setRepos([...myRepos.data, collabRepo.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepos();
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

