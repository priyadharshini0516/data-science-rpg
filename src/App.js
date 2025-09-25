import React, { useState, useEffect } from 'react';
import './App.css'; // If you have additional styles
import StatusBar from './components/StatusBar';
import GameMap from './components/GameMap';
import QuestPanel from './components/QuestPanel';
import Log from './components/Log';
import { levels, XP_PER_LEVEL } from './data/levels';

function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [logEntries, setLogEntries] = useState(['Welcome to the Data Science RPG! Start at Level 1.']);

  const levelData = levels.find(lvl => lvl.id === currentLevel);

  const addLog = (message) => {
    setLogEntries(prev => [...prev, message]);
  };

  const handleCompleteQuest = (questXp) => {
    setXp(prevXp => prevXp + questXp);
    addLog(`+${questXp} XP from quest!`);
  };

  const handleCompleteBoss = (bossXp) => {
    setXp(prevXp => prevXp + bossXp);
    setInventory(prev => [...prev, levelData.reward]);
    addLog(`Boss defeated! +${bossXp} XP and gained ${levelData.reward}.`);
  };

  useEffect(() => {
    const requiredXp = currentLevel * XP_PER_LEVEL;
    if (xp >= requiredXp) {
      setCurrentLevel(prev => prev + 1);
      setXp(0); // Reset XP for new level, or carry over if preferred
      addLog(`Level up! Now at Level ${currentLevel + 1}. Unlocked new area.`);
    }
  }, [xp, currentLevel]);

  return (
    <div className="app">
      <h1>Data Science RPG Adventure</h1>
      <StatusBar level={currentLevel} xp={xp} inventory={inventory} />
      <GameMap currentLevel={currentLevel} />
      <QuestPanel 
        levelData={levelData} 
        onCompleteQuest={handleCompleteQuest} 
        onCompleteBoss={handleCompleteBoss} 
      />
      <Log logEntries={logEntries} />
    </div>
  );
}

export default App;