// React Hooks
import { useState } from 'react';

// CSS
import './App.css';

// React Routes
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// React Components & Modules (modular import of components)
import ContactForm from './Form';
import { Player } from '@lottiefiles/react-lottie-player';
import Animate from './Animate.jsx';
import GameApp from './gameApp.jsx';
import Leaderboard from './Leaderboard';

// React Component: Main routing setup
function MyRouteApp() {
  return (
    <>
      {/* React Routes: Defines the multi-page SPA navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="*" element={<My404 />} />
      </Routes>
    </>
  );
}

// React Component: Navigation bar used across pages
function Nav(){
  return (
      <>
        <div className="nav-bar">
          <Link to="/">Home</Link> | <Link to="/game">Game</Link> | <Link to="/leaderboard">LeaderBoard</Link>
        </div>
      </>
  );
}

// React Component: Home screen with form input
// React JSX Syntax: JSX used for rendering elements
// Form Element with Event: The ContactForm includes input for player name
function Home() {
  return (
    <>
      <Nav />
      <div className="home-container">
        <h1 className="game-title">Tenzies</h1>

        {/* Lottie animations for visual appeal */}
        <Player />
        <Animate />

        {/* Form Element with Event: User inputs name in this form */}
        <ContactForm />
      </div>
    </>
  );
}

// React Component: Game screen includes main game logic
function Game() {
  return (
    <>
      <Nav />
      <GameApp />
    </>
  );
}

// React Component: Leaderboard screen showing best scores
function LeaderboardPage() {
  return (
    <>
      <Nav />
      <Leaderboard />
    </>
  );
}

// React Component: 404 fallback route
function My404(){
  return (
    <>
      <Nav />
      <h1>Page not found</h1>
    </>
  );
}

// React Component: Top-level app wrapped in <Router> for route context
function App() {
  return (
    <Router>
      <div className="page-content">
        <MyRouteApp />
      </div>
    </Router>
  );
}

export default App;
