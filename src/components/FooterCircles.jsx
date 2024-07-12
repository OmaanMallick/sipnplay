// src/FooterCircles.js
import React from 'react';
import './FooterCircles.css';

const circles = [
  { id: 'circle1', text: 'GL', hoverText: 'Text for Circle 1' },
  { id: 'circle2', text: 'ZA Cafe', hoverText: 'Text for Circle 2' },
  { id: 'circle3', text: 'Dubai', hoverText: 'Text for Circle 3' },
];

const FooterCircles = () => {
  return (
    <footer>
      {circles.map(circle => (
        <div key={circle.id} className={`circle ${circle.id}`}>
          <span className="hover-text">{circle.hoverText}</span>
          {circle.text}
        </div>
      ))}
    </footer>
  );
};

export default FooterCircles;
