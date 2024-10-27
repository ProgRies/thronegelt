import React from 'react';
import { Link } from 'react-router-dom';
import { Scroll } from 'lucide-react';

const Navbar = () => {
  const getNavText = (full: string) => {
    // Always return the full text for the Navbar
    return full; // Changed from returning null for compact and icons modes
  };

  return (
    <nav className="bg-[#1a0033]/80 backdrop-blur-sm border-b border-purple-900/30 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/thronegelt.png" alt="Throne Gelt" className="w-8 h-8" />
            <span className="text-xl font-bold text-purple-100 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">
              {getNavText('Throne Gelt')}
            </span>
          </Link>

          <div className="flex items-center">
            <Link 
              to="/whitepaper" 
              className={`flex items-center px-3 py-1 rounded-lg bg-purple-700/30 border border-purple-500/50 text-purple-200 hover:bg-purple-600/40 transition`}
              title="Ultramarine Paper"
            >
              <Scroll className="w-5 h-5" />
              <span className="text-sm ml-1">{getNavText('Ultramarine Paper')}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
