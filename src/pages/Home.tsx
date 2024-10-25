import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Copy, ExternalLink, Sword, Scroll } from 'lucide-react';

const Home = () => {
  const [copied, setCopied] = useState(false);
  const walletAddress = 'addr1qy2k8acqy7fxkyr8h2847q5xjqz9kmrvgs0v4j95d8j9vxf234k8wjn4v8lyg3l8p2673sm37dlmyk5mgvj8584t7yxqxu7x0k';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] to-[#000033] text-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Throne Gelt
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-8">
            The Emperor's Currency on Cardano
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
        <div className="mb-16 p-8 rounded-lg bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
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
              <Twitter className="w-5 h-5 mr-2" />
              Follow @ThroneGelt
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-purple-950/50 border border-purple-500/20">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-purple-300 text-center mb-2">
                Leave your gifts to the Emperor at this sacred address:
              </p>
              <div className="relative w-full max-w-md">
                <div
                  className="p-3 pr-12 rounded bg-purple-900/40 border border-purple-500/20 font-mono text-sm break-all cursor-pointer hover:bg-purple-800/40 transition-all"
                  onClick={handleCopy}
                >
                  {walletAddress}
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    onClick={handleCopy}
                  >
                    <Copy className={`w-5 h-5 ${copied ? 'text-green-400' : 'text-purple-400'}`} />
                  </button>
                </div>
                {copied && (
                  <div className="absolute -right-2 top-12 bg-green-900/90 text-green-100 px-3 py-1 rounded text-sm">
                    Copied!
                  </div>
                )}
              </div>
              <img
                src="images/thronegeld.png"
                alt="Throne Gelt Wallet QR Code"
                className="w-48 h-48 rounded-lg border-2 border-purple-500/20"
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-lg bg-purple-900/20 border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4">About Throne Gelt</h3>
            <p className="text-purple-300">
              Throne Gelt represents the Emperor's authority in the digital realm, 
              built on the robust Cardano blockchain. Prove your Loaylty to the emperor and be awarded a SMark of the Ultramarines!
            </p>
          </div>
          <div className="p-6 rounded-lg bg-purple-900/20 border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4">Token Metrics</h3>
            <ul className="space-y-2 text-purple-300">
              <li>• Total Supply: 40,000,000,000 Thrones</li>
              <li>• Network: Cardano</li>
              <li>• Distribution: Community-focused</li>
              <li>• Utility: Emperor's Blessing</li>
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