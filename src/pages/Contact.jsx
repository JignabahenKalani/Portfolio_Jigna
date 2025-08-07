import React from 'react';

const Contact = () => {
  return (
    <section className="home-container">
      <div className="home-content contact-section">
        <div className="contact-info">
        <h2>Contact Me</h2>
        <p>📞 +44 7880 321903</p>
        <p>📧 <a href="mailto:jignakalani007@gmail.com">jignakalani007@gmail.com</a></p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/jigna-kalani"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </p>
        <p>
          💻 GitHub:{" "}
          <a
            href="https://github.com/JignabahenKalani"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
