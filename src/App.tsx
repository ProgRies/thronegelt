import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Victories from './pages/Victories';
import Whitepaper from './pages/Whitepaper';
import { GameProvider } from './context/GameContext';
import { VictoryProvider } from './context/VictoryContext';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#1a0033] to-[#0a0014]">
      <VictoryProvider>
        <GameProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/victories" element={<Victories />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
          </Routes>
        </GameProvider>
      </VictoryProvider>
    </div>
  );
}

export default App;