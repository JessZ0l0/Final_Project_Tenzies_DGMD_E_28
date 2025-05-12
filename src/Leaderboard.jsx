// React Hooks: useState and useEffect
import React, { useState, useEffect } from 'react';

// Styling
import './index.css';
import './Leaderboard.css';

function Leaderboard() {
  // React Hook: State to store name and score
  const [name, setName] = useState('');
  const [bestScore, setBestScore] = useState(null);

  // useEffect: Load data from localStorage when component mounts
  // API or Storage Access: Retrieve data stored across sessions
  useEffect(() => {
    const storedName = localStorage.getItem('playerName') || 'Anonymous';
    const storedScore = localStorage.getItem('bestScore');
    setName(storedName);
    setBestScore(storedScore);
  }, []);

  // Reset function to clear localStorage and state
  function resetScore() {
    localStorage.removeItem('playerName');
    localStorage.removeItem('bestScore');
    setName('Anonymous');
    setBestScore(null);
  }

  return (
    <>
      {/* React JSX Syntax: Dynamic rendering of leaderboard */}
      <div className="leaderboard-container">
        <h1>Leaderboard</h1>

        {/* JSX with conditional rendering: fallback if no data exists */}
        <p className="leaderboard-info">🏅 Player: {name}</p>
        <p className="leaderboard-info">
          🎲 Best Score: {bestScore ?? 'No games played yet'}
        </p>

        {/* Event Handling: Clear leaderboard */}
        <button className="reset-button" onClick={resetScore}>
          Reset Leaderboard
        </button>
      </div>
    </>
  );
}

export default Leaderboard;
