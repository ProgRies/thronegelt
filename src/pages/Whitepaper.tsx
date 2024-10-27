import React from 'react';
import { Scroll, Coins, Image, FileText, Cpu } from 'lucide-react';

const Whitepaper = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Scroll className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-purple-200 mb-4">
            The Ultramarine Paper
          </h1>
          <p className="text-lg md:text-xl text-purple-300">
            Technical Documentation of the <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Emperor's Currency</span>
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              title: "What is Throne Gelt?",
              content: `Throne Gelt is a cryptocurrency, similar to Bitcoin or Ethereum, but it's built on a blockchain called Cardano. Cardano is known for being more environmentally friendly, secure, and decentralized compared to other blockchains. Throne Gelt is a MEME coin, which means it's not meant to make people rich but is created for fun, art, and community tech projects.  
                         
            Throne Gelt's governance is built entirely on the faith in the Emperor. The distribution and maintenance of the Imperial treasure chest are handled faithfully through an associated Twitter account. Everything is driven by loyalty, trust, and community engagement.`
            },
            {
              title: "Technology",
              content: `
Throne Gelt has a fixed total supply of 40 billion tokens, meaning that no more can ever be created. This limit ensures that each token holds value, as scarcity is a key factor in determining worth. Just like how a limited edition collectible can be more valuable because there are only a few available, the same principle applies here. 

Additionally, Throne Gelt is indivisible, which means you cannot break it down into smaller parts. Each token is a whole unit, reinforcing its status as a complete and valuable asset.`,
              className: "border-2 border-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-pulse"
            },
            {
              title: "Roadmap",
              content: (
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg">
                    <div className="text-lg font-bold text-gray-800">Automatic Payments - In development!</div>
                    <div className="w-10 h-10 flex items-center justify-center text-white"><Coins /></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg">
                    <div className="text-lg font-bold text-gray-800">NFTs - Utility for your thrones.</div>
                    <div className="w-10 h-10 flex items-center justify-center text-white"><Image /></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg">
                    <div className="text-lg font-bold text-gray-800">Smart Contracts - Sign your oath to the emperor.</div>
                    <div className="w-10 h-10 flex items-center justify-center text-white"><FileText /></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg">
                    <div className="text-lg font-bold text-gray-800">Machine God - Treasury powered by AI-X account.</div>
                    <div className="w-10 h-10 flex items-center justify-center text-white"><Cpu /></div>
                  </div>
                </div>
              )
            },
            {
              title: "Distribution Mechanism",
              content: `To earn your Throne Gelt, simply send your prayers to the Emperor through the DMs of our official Twitter account. Right now, a devoted servant of the Emperor manages this process, but we're working towards full automation.
              
              Soon, certain prayers and gifts—like images of your painted miniatures—will earn you even more thrones. It's a fun and engaging way to connect with the community and be rewarded for your creativity!`,
              className: "border-2 border-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.5)] animate-pulse"
            },
            {
              title: "Conclusion",
              content: `Throne Gelt is more than a meme coin; it is a movement—a clarion call to all who serve the Emperor to unite, engage, and be rewarded. This is His commandment: to spread His currency, to strengthen His community, and to stand resolute against the tide of heresy.

Will you heed the call?

For the Emperor!`
            }
          ].map((section, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-purple-200 mb-6">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl text-purple-300/90 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
