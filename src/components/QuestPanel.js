import React, { useState } from 'react';

const QuestPanel = ({ levelData, onCompleteQuest, onCompleteBoss }) => {
  const [answer, setAnswer] = useState('');
  const [questIndex, setQuestIndex] = useState(0);
  const [isBoss, setIsBoss] = useState(false);

  if (!levelData) return null;

  const handleSubmit = () => {
    const currentQuest = isBoss ? levelData.boss : levelData.quests[questIndex];
    if (answer.toLowerCase().includes(currentQuest.answer.toLowerCase())) {
      if (isBoss) {
        onCompleteBoss(currentQuest.xp);
        setIsBoss(false);
      } else {
        onCompleteQuest(currentQuest.xp);
        if (questIndex < levelData.quests.length - 1) {
          setQuestIndex(questIndex + 1);
        } else {
          setIsBoss(true);
        }
      }
      alert('Correct! Quest complete.');
    } else {
      alert('Wrong! Try again.');
    }
    setAnswer('');
  };

  const current = isBoss ? levelData.boss : levelData.quests[questIndex];

  return (
    <div className="quest-panel">
      <h2>Current Quest in {levelData.name}</h2>
      <p>{levelData.description}</p>
      <p>{isBoss ? 'Boss Fight: ' : 'Quest: '}{current.question}</p>
      <input 
        type="text" 
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)} 
        placeholder="Your answer" 
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuestPanel;