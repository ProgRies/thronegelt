import React, { useEffect } from 'react';
import { Scroll, Coins, Image, FileText, Cpu } from 'lucide-react';

const Whitepaper = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Scroll className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-purple-200 mb-4">
            The Ultramarine Paper
          </h1>
          <p className="text-lg md:text-xl text-purple-300">
            Technical Documentation of the <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">Emperor's Currency</span>
          </p>
        </div>

        <div className="space-y-12">
          <div className="p-8 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-200 mb-6">What is Throne Gelt?</h2>
            <p className="text-lg md:text-xl text-purple-300/90 leading-relaxed whitespace-pre-line">
              Throne Gelt is a <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">cryptocurrency</span>, similar to Bitcoin or Ethereum, but it's built on a blockchain called <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">Cardano</span>. Cardano is known for being more environmentally friendly, secure, and decentralized compared to other blockchains. Throne Gelt is a MEME coin, which means it's not meant to make people rich but is created for fun, art, and <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">community tech projects</span>.  
              <br /><br />
              Throne Gelt's governance is built entirely on faith in the Emperor. The distribution and maintenance of the Imperial treasure chest are handled faithfully through an <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">associated Twitter account</span>. Everything is driven by loyalty, trust, and community engagement.
            </p>
          </div>

          <div className="p-0 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <div className="flex justify-center">
              <img src="/images/coins_being_launch_into_space.png" alt="Coins being launched into the air" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 border-2 border-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.5)]">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-200 mb-6">Technology</h2>
            <p className="text-lg md:text-xl text-purple-300/90 leading-relaxed whitespace-pre-line">
              Throne Gelt has a fixed total supply of <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">40 billion tokens</span>, meaning that no more can ever be created. This limit ensures that each token holds value, as scarcity is a key factor in determining worth. Just like how a limited edition collectible can be more valuable because there are only a few available, the same principle applies here. 
              <br /><br />
              Additionally, Throne Gelt is indivisible, which means you cannot break it down into smaller parts. Each token is a whole unit, reinforcing its status as a complete and valuable asset.
            </p>
          </div>

          <div className="p-0 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <div className="flex justify-center">
              <img src="/images/coins_being_launch_into_ship.png" alt="Coins being launched into the air" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-200 mb-6">Roadmap</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg">
                <div className="text-lg font-bold text-gray-800 ">Automatic Payments - In development!</div>
                <div className="w-10 h-10 flex items-center justify-center text-white"><Coins /></div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg">
                <div className="text-lg font-bold text-gray-800 ">NFTs - Utility for your thrones.</div>
                <div className="w-10 h-10 flex items-center justify-center text-white"><Image /></div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg">
                <div className="text-lg font-bold text-gray-800 ">Smart Contracts - Sign your oath to the emperor.</div>
                <div className="w-10 h-10 flex items-center justify-center text-white"><FileText /></div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg">
                <div className="text-lg font-bold text-gray-800 ">Machine God - Treasury powered by AI-X account.</div>
                <div className="w-10 h-10 flex items-center justify-center text-white"><Cpu /></div>
              </div>
            </div>
          </div>

          <div className="p-0 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <div className="flex justify-center">
              <img src="/images/shipstream.png" alt="Coins being launched into the air" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 border-2 border-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.5)]">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-200 mb-6">Distribution Mechanism</h2>
            <p className="text-lg md:text-xl text-purple-300/90 leading-relaxed whitespace-pre-line">
              To earn your Throne Gelt, simply follow and DM the <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">official Twitter</span> account. Right now, a devoted servant of the Emperor manages this process, but we're working towards full automation.
              <br /><br />
              Soon, the <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">best prayers</span> will be publicly shared by the account. The highest-rated, reposted, and interacted-with posts will bless the servant with even more thrones, <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse">incentivizing</span> creative prayers and gifts, which in return will incentivize a healthy community about uplifting each other's work.
            </p>
          </div>

          <div className="p-0 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <div className="flex justify-center">
              <img src="/images/lavaship.png" alt="Coins being launched into the air" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-200 mb-6">Conclusion</h2>
            <p className="text-lg md:text-xl text-purple-300/90 leading-relaxed whitespace-pre-line">
              Throne Gelt is a unique cryptocurrency built on the Cardano blockchain, featuring a fixed supply of 40 billion indivisible tokens. Its governance relies on community trust, facilitated through an official Twitter account. The roadmap includes advancements such as automatic payments and NFT utilities, positioning Throne Gelt as a forward-thinking asset in the digital economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
