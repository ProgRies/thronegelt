import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Coins, Scroll } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] to-[#000033] text-purple-100 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-16 pt-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">
            Throne Gelt
          </h1>
          <img
            src="/images/thronegelt.png"
            alt="Throne Gelt Coin Design"
            className="w-60 h-60 rounded-lg border-black-500/20 mx-auto"
          />
          <p className="text-xl md:text-2xl text-purple-300 mb-16">
            The Emperor's Currency
          </p>
        </div>

        {/* Twitter Section */}
        <div className="mb-20 p-8 rounded-lg backdrop-blur-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-pulse">
              Receive free thrones
            </h2>
            <p className="text-purple-300 text-lg md:text-2xl">
              To <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">have your wallet blessed </span> by the thrones of the emperor, 
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse"> Follow & DM a prayer </span>
              along with your wallet address to this X Account:
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <a
              href="https://x.com/ThroneGelt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600 rounded-lg text-white font-bold text-lg transition-all imperial-glow transform hover:scale-105"
            >
              Follow @ThroneGelt
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://yoroi-wallet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 border border-yellow-400 rounded-lg text-yellow-400 font-bold text-lg transition-all hover:bg-yellow-400 hover:text-white"
            >
              We recommend the Yoroi Wallet
            </a>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="relative my-8">
          <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
        </div>

        {/* New Info Box Section */}
        <div className="mb-20 p-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            What is Throne Gelt?
          </h2>
          <p className="text-purple-300 mb-8 text-lg md:text-3xl">
            Throne Gelt is a <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">currency</span>, similar to Bitcoin or Ethereum.
          </p>
          <p className="text-purple-300 mb-8 text-lg md:text-3xl">
            There are <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">40 Billion thrones</span> in the emperors treasury
          </p>
          <p className="text-purple-300 mb-12 text-lg md:text-3xl">
            Throne Gelt is created for fun, art, and <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">community tech projects</span>.
          </p>
          <div className="flex flex-col items-center space-y-10 mb-6">
            <div className="flex flex-col items-center animate-pulse text-center">
              <Coins className="w-8 h-8 text-yellow-400 mb-2" />
              <span className="text-purple-300 text-lg md:text-2xl">
                Tokenomics: 40,000,000,000
              </span>
            </div>
            <div className="flex flex-col items-center animate-pulse text-center">
              <Scroll className="w-8 h-8 text-green-400 mb-2" />
              <a 
                href="https://cardanoscan.io/token/d60f4ccfcc905a7dfbc4a2dc9709e8a9301406631e0c2dbb28629e380014df105468726f6e652047656c74" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-300 text-lg md:text-2xl break-all"
              >
                Policy: d60f4ccfcc905a7dfbc4a2dc9709e8a9301406631e0c2dbb28629e38
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="relative my-24">
          <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
        </div>

        {/* Ultramarine Paper Link */}
        <div className="text-center mb-12">
          <Link
            to="/whitepaper"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600 rounded-lg text-white font-bold text-lg transition-all imperial-glow transform hover:scale-105"
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
