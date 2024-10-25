import React from 'react';
import { useVictories } from '../context/VictoryContext';
import { Trophy } from 'lucide-react';
import BadgeGenerator from '../utils/BadgeGenerator';

const Victories = () => {
  const { victories } = useVictories();

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Trophy className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-purple-200 mb-4">
            Honourable Servants
          </h1>
          <p className="text-purple-300">
            Glory to those who serve the Emperor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {victories.length === 0 ? (
            <div className="md:col-span-2 text-center p-8 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <p className="text-purple-300">No victories recorded yet. Be the first to bring glory to the Chapter!</p>
            </div>
          ) : (
            victories.map((victory, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 flex items-center space-x-4"
              >
                <div className="w-24 h-24 flex-shrink-0">
                  <BadgeGenerator seed={victory.badgeSeed} size={96} />
                </div>
                <div>
                  <p className="text-xl font-bold text-purple-200 mb-2">{victory.message}</p>
                  <p className="text-purple-400 mb-2">{victory.gameMessage}</p>
                  <p className="text-sm text-purple-300/60">
                    {new Date(victory.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Victories;