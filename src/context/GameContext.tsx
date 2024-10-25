import React, { createContext, useContext, useState } from 'react';

type GameState = 'powering' | 'shooting' | 'victory';

interface GameContextType {
  gameState: GameState;
  setGameState: (state: GameState) => void;
  score: number;
  setScore: (score: number) => void;
  currentGame: number;
  setCurrentGame: (game: number) => void;
  winMessage: string;
  setWinMessage: (message: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>('powering');
  const [score, setScore] = useState(0);
  const [currentGame, setCurrentGame] = useState(0);
  const [winMessage, setWinMessage] = useState('');

  return (
    <GameContext.Provider value={{
      gameState,
      setGameState,
      score,
      setScore,
      currentGame,
      setCurrentGame,
      winMessage,
      setWinMessage
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};