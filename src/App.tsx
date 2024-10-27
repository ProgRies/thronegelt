import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Whitepaper from './pages/Whitepaper';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0014] via-[#1a0033] to-[#0a0014]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </div>
  );
}

export default App;