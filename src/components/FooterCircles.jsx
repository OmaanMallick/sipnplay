import React from 'react';
import './FooterCircles.css';

const circles = [
  { id: 'circle1', hoverText: 'Bloomburrow Pre-release is coming soon! Continuing with Monday nights as everyone really enjoyed the extra day if the weekend ended up being busy. Enjoy the cutest set of the year!' },
  { id: 'circle2', hoverText: 'Come on in with your friends and family and play boardgames from our collection of over 500+ games! Just $10 a person for 3 hours of gameplay' },
  { id: 'circle3', hoverText: 'Want to play the new Disney trading card game? Were hosting a Lorcana learn to play event on July 22nd 6pm! Just grab a starter deck at Sip & Play and well have players on hand to teach you.' }
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
