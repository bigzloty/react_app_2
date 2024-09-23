// src/Player.js
import React from 'react';
// import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: '18rem',
    margin: '10px'
  };

  return (
    <div>
       <div style={cardStyle}>
      <img variant="top" src={imageUrl} alt={name} />
      <div>
        <div>{name}</div>
        <div>
          Team: {team}
        </div>
        <div>
          Nationality: {nationality}
        </div>
        <div>
          Jersey Number: {jerseyNumber}
        </div>
        <div>
          Age: {age}
        </div>
      </div>
    </div>
    </div>
  );
};

// Set default props for Player component
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://example.com/default.jpg"
};

export default Player;