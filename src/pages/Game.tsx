import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useVictories } from '../context/VictoryContext';
import { Power, Skull, Bug, Users2, Scroll } from 'lucide-react';
import BadgeGenerator from '../utils/BadgeGenerator';
import { Link } from 'react-router-dom';

type GameState = 'power' | 'charge' | 'combat' | 'victory';

interface Target {
  id: string;
  icon: React.ReactNode;
  hit: boolean;
}

const Game: React.FC = () => {
  const { addVictory } = useVictories();
  const [gameState, setGameState] = useState<GameState>('power');
  const [chargeLevel, setChargeLevel] = useState(0);
  const [servantName, setServantName] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [targets, setTargets] = useState<Target[]>([
    { id: 'xenos', icon: <Bug className="w-12 h-12" />, hit: false },
    { id: 'chaos', icon: <Skull className="w-12 h-12" />, hit: false },
    { id: 'heretic', icon: <Users2 className="w-12 h-12" />, hit: false }
  ]);

  const handlePowerButton = () => {
    setGameState('charge');
  };

  const handleCharge = () => {
    if (chargeLevel < 3) {
      setChargeLevel(prev => prev + 1);
    }
    if (chargeLevel === 2) {
      setTimeout(() => {
        setGameState('combat');
      }, 500);
    }
  };

  const handleTargetClick = (targetId: string) => {
    setTargets(prev => 
      prev.map(target => 
        target.id === targetId ? { ...target, hit: true } : target
      )
    );

    if (targets.filter(t => !t.hit).length === 1) {
      setTimeout(() => {
        setGameState('victory');
      }, 500);
    }
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (servantName.trim()) {
      addVictory(servantName);
      setNameSubmitted(true);
    }
  };

  const handlePlayAgain = () => {
    setGameState('power');
    setChargeLevel(0);
    setServantName('');
    setNameSubmitted(false);
    setTargets(targets.map(target => ({ ...target, hit: false })));
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#000033] to-[#1a1a4d]">
      {gameState === 'power' && (
        <div className="w-full flex flex-col items-center justify-center text-center space-y-6">
          <h2 className="text-2xl font-bold text-purple-200 mb-8">Activate Power Pack</h2>
          <button
            onClick={handlePowerButton}
            className="w-32 h-32 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 border-red-400"
          >
            <Power className="w-16 h-16 text-white" />
          </button>
        </div>
      )}

      {gameState === 'charge' && (
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center text-purple-200 mb-8">Charge Your Weapon</h2>
          <div
            className="h-16 bg-gray-800 rounded-lg overflow-hidden border-2 border-blue-300 cursor-pointer"
            onClick={handleCharge}
          >
            <div
              className="h-full bg-gradient-to-r from-blue-300 to-white transition-all duration-300 flex items-center justify-center imperial-glow"
              style={{ width: `${(chargeLevel / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      {gameState === 'combat' && (
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center text-purple-200">Eliminate the Threats</h2>
          <div className="grid grid-cols-3 gap-8">
            {targets.map((target) => (
              <button
                key={target.id}
                onClick={() => !target.hit && handleTargetClick(target.id)}
                className={`p-6 rounded-lg ${
                  target.hit
                    ? 'bg-red-900/50 cursor-not-allowed'
                    : 'bg-purple-900/50 hover:bg-purple-800/50 cursor-pointer'
                } transition-all`}
                disabled={target.hit}
              >
                {target.icon}
              </button>
            ))}
          </div>
        </div>
      )}

      {gameState === 'victory' && (
        <div className="w-full max-w-md space-y-6">
          {!nameSubmitted ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-purple-200 mb-8">Enter Your Name</h2>
              <form onSubmit={handleNameSubmit} className="space-y-4">
                <input
                  type="text"
                  value={servantName}
                  onChange={(e) => setServantName(e.target.value)}
                  placeholder="Enter your name, servant of the Emperor"
                  className="w-full p-3 rounded bg-gray-800 text-purple-200 border border-purple-500"
                />
                <button
                  type="submit"
                  className="w-full p-3 rounded bg-purple-600 text-white font-bold hover:bg-purple-700 transition-colors"
                >
                  Receive Mark
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-8 rounded-lg bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-500/50 imperial-glow">
                <h2 className="text-2xl font-bold text-center text-purple-200 mb-6">
                  {servantName}'s Mark of Victory
                </h2>
                <div className="flex justify-center mb-6">
                  <BadgeGenerator seed={servantName} size={200} />
                </div>
                <p className="text-center text-purple-200 text-lg mb-6">
                  Take a screenshot to immortalize your glory!
                </p>
                <div className="space-y-3">
                  <button
                    onClick={handlePlayAgain}
                    className="w-full p-3 rounded border-2 border-purple-500 text-purple-200 font-bold hover:bg-purple-500/20 transition-colors"
                  >
                    Serve Again
                  </button>
                  <Link
                    to="/whitepaper"
                    className="w-full p-3 rounded bg-purple-600 text-white font-bold hover:bg-purple-700 transition-colors flex items-center justify-center"
                  >
                    <Scroll className="w-5 h-5 mr-2" />
                    Read the Ultramarine Paper
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;