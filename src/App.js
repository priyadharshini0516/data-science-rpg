import React, { useState, useEffect } from 'react';
import StatusBar from './components/StatusBar';
import GameMap from './components/GameMap';
import QuestPanel from './components/QuestPanel';
import Log from './components/Log';
import { levels, XP_PER_LEVEL } from './data/levels';

function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [highestUnlockedLevel, setHighestUnlockedLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [logEntries, setLogEntries] = useState(['Welcome to the Data Science RPG! Start at Level 1.']);

  const levelData = levels.find(lvl => lvl.id === currentLevel);

  const addLog = (message) => {
    setLogEntries(prev => [...prev, message]);
  };

  const handleCompleteQuest = (questXp) => {
    setXp(prevXp => prevXp + questXp);
    addLog(`⚡ +${questXp} XP from quest!`);
  };

  const handleCompleteBoss = (bossXp, reward) => {
    setXp(prevXp => prevXp + bossXp);
    setInventory(prev => [...prev, reward]);
    setHighestUnlockedLevel(prev => Math.min(prev + 1, levels.length));
    addLog(`🏆 Boss defeated! +${bossXp} XP and gained ${reward}.`);
  };

  useEffect(() => {
    const requiredXp = currentLevel * XP_PER_LEVEL;
    if (xp >= requiredXp) {
      setCurrentLevel(prev => prev + 1);
      setHighestUnlockedLevel(prev => Math.max(prev, currentLevel + 1));
      setXp(0); // Reset XP for simplicity
      addLog(`🌟 Level up! Now at Level ${currentLevel + 1}. Unlocked new area.`);
    }
  }, [xp, currentLevel]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-amber-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-amber-900 mb-6">🧙‍♂️ Data Science RPG Adventure</h1>
        <StatusBar level={currentLevel} xp={xp} inventory={inventory} />
        <GameMap
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
          highestUnlockedLevel={highestUnlockedLevel}
        />
        <QuestPanel
          levelData={levelData}
          onCompleteQuest={handleCompleteQuest}
          onCompleteBoss={handleCompleteBoss}
        />
        <Log logEntries={logEntries} />
      </div>
    </div>
  );
}

export default App;