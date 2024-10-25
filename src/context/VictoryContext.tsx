import React, { createContext, useContext, useState, useEffect } from 'react';

interface Victory {
  message: string;
  timestamp: number;
  gameMessage: string;
  badgeSeed: string;
}

interface VictoryContextType {
  victories: Victory[];
  addVictory: (message: string, gameMessage: string, badgeSeed: string) => void;
}

const VictoryContext = createContext<VictoryContextType | undefined>(undefined);

export const VictoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [victories, setVictories] = useState<Victory[]>(() => {
    const stored = localStorage.getItem('victories');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('victories', JSON.stringify(victories));
  }, [victories]);

  const addVictory = (message: string, gameMessage: string, badgeSeed: string) => {
    setVictories(prev => [...prev, {
      message,
      gameMessage,
      badgeSeed,
      timestamp: Date.now()
    }]);
  };

  return (
    <VictoryContext.Provider value={{ victories, addVictory }}>
      {children}
    </VictoryContext.Provider>
  );
};

export const useVictories = () => {
  const context = useContext(VictoryContext);
  if (!context) throw new Error('useVictories must be used within VictoryProvider');
  return context;
};