import React, { useState } from 'react';

function HeroPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container flex space-x-10">
      <div className={` menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="toggle-button" onClick={toggleMenu}>
          Menu
        </button>
        <div className="contact-link">Contact</div>
      </div>
      <div className="skills-list">
        <h2>Skills:</h2>
        <ul>
          <li>Next.js</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          {/* Add more skills here */}
        </ul>
      </div>
    </div>
  );
}

export default HeroPage;
