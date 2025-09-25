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
        onCompleteBoss(currentQuest.xp, levelData.reward);
        setIsBoss(false);
      } else {
        onCompleteQuest(currentQuest.xp);
        if (questIndex < levelData.quests.length - 1) {
          setQuestIndex(questIndex + 1);
        } else {
          setIsBoss(true);
        }
      }
      alert('🎉 Correct! Quest complete!');
    } else {
      alert('❌ Wrong! Try again.');
    }
    setAnswer('');
  };

  const current = isBoss ? levelData.boss : levelData.quests[questIndex];

  return (
    <div className="p-6 bg-amber-100 rounded-lg shadow-lg border-2 border-amber-900">
      <h2 className="text-xl font-bold text-amber-900 mb-2">📜 Quest in {levelData.name}</h2>
      <p className="text-amber-800 mb-4">{levelData.description}</p>
      <p className="font-semibold mb-2">{isBoss ? '⚔️ Boss Fight: ' : '📝 Quest: '}{current.question}</p>
      <div className="flex items-center">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer"
          className="p-2 border border-amber-900 rounded-lg mr-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button
          onClick={handleSubmit}
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestPanel;