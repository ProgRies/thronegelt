import React from 'react';
import { Scroll } from 'lucide-react';

const Whitepaper = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Scroll className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-purple-200 mb-4">
            The Ultramarine Paper
          </h1>
          <p className="text-xl text-purple-300">
            Technical Documentation of the Emperor's Currency
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "What is Throne Gelt?",
              content: `Throne Gelt is a cryptocurrency, similar to Bitcoin or Ethereum, but it's built on a blockchain called Cardano. Cardano is known for being more environmentally friendly, secure, and decentralized compared to other blockchains. Throne Gelt is a MEME coin, which means it's not meant to make people rich but is created for fun, art, and community tech projects. 
            
            This coin is designed to bring together the Warhammer 40k community and reward those who serve the Emperor by participating in creative and loyal activities. The project will start small, with simple ways to earn and share the coin through social media, and eventually, we'll create more entertaining projects that show how Cardano technology works.
            
            Throne Gelt's governance is built entirely on the faith in the Emperor. The distribution and maintenance of the Imperial treasure chest are handled faithfully through an associated Twitter account. Everything is driven by loyalty, trust, and community engagement.`
            },

            {
              title: "Abstract",
              content: `In the grim darkness of the internet, there is only... memes. Yet, amidst the chaos of digital heresy, a new beacon of hope emerges: Throne Gelt. Decreed by the Emperor Himself, this immutable currency is forged on the unbreakable chains of the Cardano blockchain. Its purpose? To reward the loyal, empower the faithful, and smite the unworthy.`
            },
            {
              title: "The Emperor's Vision",
              content: `Throne Gelt is not just a coin; it is a manifestation of the Emperor's will. It represents the virtues of loyalty, service, and the unyielding spirit of humanity. Those who uphold these ideals shall be rewarded, while those who falter shall be left in the shadows. Rejecting the heretic and the xenos, Throne Gelt shall not pass into the hands of heretics, agents of chaos, or xenos sympathizers. It is a pure currency for a pure purpose.`
            },
            {
              title: "Technology",
              content: `Immutable and Indivisible:
- Total Supply: 40,000,000,000 Throne Gelt
- Divisibility: None (Whole units only)
- Blockchain: Cardano

The Emperor has ordained a hard cap of 40 billion Throne Gelt, symbolizing the countless stars under His dominion. The coin is indivisible; it is whole and complete, just as His vision for humanity.`
            },
            {
              title: "Distribution Mechanism",
              content: `An anonymous servant of the Emperor disseminates Throne Gelt via the astropathic channels of Twitter. To receive His blessing:
- Engage: Tag, comment, or send a direct message to the sacred account.
- Demonstrate Loyalty: Show deeds that honor the Emperor.
- Receive: A random amount of Throne Gelt, as determined by His divine will.

No rituals or sacrifices are necessary—only pure, unadulterated loyalty.`
            },
            {
              title: "Community Engagement",
              content: `Artisans and Warriors Unite:
- Artists: Those who craft images glorifying the Emperor may receive Throne Gelt to continue their holy work.
- Miniature Showcases: Share pictures of your meticulously painted minis to inspire others and earn rewards.
- Battles: Wager your Throne Gelt in honorable combat, whether on the tabletop or in the digital arena.

Throne Gelt incentivizes the rich tapestry of activities that define the Emperor's community.`
            },
            {
              title: "Philosophy of Service",
              content: `Throne Gelt embodies the principle that service to the Emperor should not go unnoticed. It creates a cycle of recognition and encouragement, fostering a community where deeds align with words. As the currency circulates, it brings together like-minded individuals, strengthening the bonds of fellowship and collective purpose against the encroaching darkness.`
            },
            {
              title: "Roadmap",
              content: `As the number of wallets holding Throne Gelt grows, so too does the scope of our mission:
- 10 Wallets: The first whispers of the Emperor's voice.
- 100 Wallets: Initiation of minor projects to enhance engagement.
- 250 Wallets: Deployment of an AI Voice Assistant, simulating messages from the Emperor Himself.
- 500 Wallets: Introduction of NFTs, capturing moments of glory and honor.
- 1,000 Wallets: Unveiling of grand projects, as yet known only to the Emperor.

These are not deadlines but destinies—achievements unlocked through collective effort and devotion.`
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
