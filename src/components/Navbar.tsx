import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Scroll, Trophy } from 'lucide-react';

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getDisplayMode = () => {
    if (screenWidth > 768) return 'full';
    if (screenWidth > 480) return 'compact';
    return 'icons';
  };

  const displayMode = getDisplayMode();

  const getNavText = (full: string, compact: string) => {
    switch (displayMode) {
      case 'full':
        return full;
      case 'compact':
        return compact;
      case 'icons':
        return null;
    }
  };

  return (
    <nav className="bg-[#1a0033]/80 backdrop-blur-sm border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/thronegelt.png" alt="Throne Gelt" className="w-8 h-8" />
            <span className="text-xl font-bold text-purple-100">
              {getNavText('Throne Gelt', 'TG')}
            </span>
          </Link>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link 
              to="/" 
              className="flex flex-col items-center px-2 py-1 text-purple-200 hover:text-purple-400 transition"
              title="Home"
            >
              <Home className="w-5 h-5" />
              {getNavText('Home', 'Home') && (
                <span className="text-xs mt-1">{getNavText('Homepage', 'Home')}</span>
              )}
            </Link>
            
            <Link 
              to="/victories" 
              className="flex flex-col items-center px-2 py-1 text-purple-200 hover:text-purple-400 transition"
              title="Victories"
            >
              <Trophy className="w-5 h-5" />
              {getNavText('Victories', 'Glory') && (
                <span className="text-xs mt-1">{getNavText('Victories', 'Glory')}</span>
              )}
            </Link>
            
            <Link 
              to="/whitepaper" 
              className={`flex flex-col items-center px-3 py-1 ${
                displayMode === 'icons' ? 'rounded-full' : 'rounded-lg'
              } bg-purple-700/30 border border-purple-500/50 text-purple-200 hover:bg-purple-600/40 transition`}
              title="Ultramarine Paper"
            >
              <Scroll className="w-5 h-5" />
              {getNavText('Ultramarine Paper', 'Paper') && (
                <span className="text-xs mt-1">{getNavText('Ultramarine Paper', 'Paper')}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
