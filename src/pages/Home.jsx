import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profile from '../assets/profile.jpg';
import '../index.css';
import CV from '../assets/JIGNABAHEN_KALANI_CV.pdf';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Quick Learner",
        "Problem Solver",
        "Web Developer",
        "Full Stack Developer",
        "Team Player",
        "Tech Enthusiast",
        "Frontend Developer",
        "Backend Developer",
        "Open Source Contributor",
        "Creative Thinker"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <img src={profile} alt="Profile" className="profile-photo" />
        <h1>Hi, I'm Jignabahen Kalani</h1>
        <h2><span ref={typedRef}></span></h2>
        
       
        <div className="home-buttons">
          <a
            href={CV}
            className="home-btn"
            download
          >
            Download CV
          </a>
          <a
            href="https://vimeo.com/1094380698/5a325ad434?ts=0&share=copy" 
            className="home-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch My Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
