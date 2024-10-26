import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Sword, Scroll } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] to-[#000033] text-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Throne Gelt
          </h1>
          <img
                src="/images/thronegelt.png"
                alt="Throne Gelt Coin Design"
                className="w-65 h-65 rounded-lg border-black-500/20 mx-auto"
              />
          <p className="text-xl md:text-2xl text-purple-300 mb-8">
            The Emperor's Currency
          </p>
          <Link
            to="/game"
            className="inline-flex items-center px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-semibold transition-all"
          >
            <Sword className="w-5 h-5 mr-2" />
            Start Your Mission
          </Link>
        </div>

        {/* Twitter Section */}
        <div className="mb-16 p-8 rounded-lg backdrop-blur-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Recieve free thrones!</h2>
            <p className="text-purple-300">
              DM your wallet address to this X Account to recieve free thrones!
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://x.com/ThroneGelt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all"
            >
              <X className="w-5 h-5 mr-2" />
              Follow @ThroneGelt
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-lg bg-purple-900/20 border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4">About Throne Gelt</h3>
            <p className="text-purple-300">
            Throne Gelt is a cryptocurrency on the Cardano blockchain,
            known for its eco-friendly, secure, and decentralized design. 
            As a MEME coin, Throne Gelt focuses on fun, art, and community tech projects, not profit-making.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-purple-900/20 border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4">Token Metrics</h3>
            <ul className="space-y-2 text-purple-300">
              <li>• Total Supply: 40,000,000,000 Thrones</li>
              <li>• Network: Cardano</li>
              <li>• Distribution: Community-focused</li>
              <li>• Policy: b606897eaeb9ecbb7f08acb411d357b4248bbd4be64ac512034c85fe</li>
            </ul>
          </div>
        </div>

        {/* Whitepaper Link */}
        <div className="text-center">
          <Link
            to="/whitepaper"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600 rounded-lg text-white font-bold text-lg transition-all imperial-glow"
          >
            <Scroll className="w-6 h-6 mr-3" />
            Read the Ultramarine Paper
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;