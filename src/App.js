import React, { useState, useEffect } from 'react';
import StatusBar from './components/StatusBar';
import GameMap from './components/GameMap';
import QuestPanel from './components/QuestPanel';
import Log from './components/Log';
import { levels, XP_PER_LEVEL } from './data/levels';
import { images } from './assets/images';

function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [highestUnlockedLevel, setHighestUnlockedLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [logEntries, setLogEntries] = useState(['Embark on your Data Science Quest! Begin at the Village of Data.']);

  const levelData = levels.find(lvl => lvl.id === currentLevel);

  const addLog = (message) => {
    setLogEntries(prev => [...prev, message]);
  };

  const handleCompleteQuest = (questXp) => {
    setXp(prevXp => prevXp + questXp);
    addLog(`✨ +${questXp} XP from quest!`);
  };

  const handleCompleteBoss = (bossXp, reward) => {
    setXp(prevXp => prevXp + bossXp);
    setInventory(prev => [...prev, reward]);
    setHighestUnlockedLevel(prev => Math.min(prev + 1, levels.length));
    addLog(`🏆 Epic Victory! +${bossXp} XP and claimed ${reward}.`);
  };

  useEffect(() => {
    const requiredXp = currentLevel * XP_PER_LEVEL;
    if (xp >= requiredXp) {
      setCurrentLevel(prev => prev + 1);
      setHighestUnlockedLevel(prev => Math.max(prev, currentLevel + 1));
      setXp(0);
      addLog(`🌟 Ascended to Level ${currentLevel + 1}! New lands await!`);
    }
  }, [xp, currentLevel]);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${images.background})` }}
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-2xl p-6 my-6">
        <h1 className="text-3xl font-bold text-center text-yellow-900 mb-6 drop-shadow-lg">🧙‍♂️ Data Science RPG Quest</h1>
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