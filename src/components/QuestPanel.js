import React, { useState } from 'react';
import { images } from '../assets/images';

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
      alert('🎉 Quest Conquered! Treasure Unlocked!');
    } else {
      alert('❌ The Magic Fails! Try Again.');
    }
    setAnswer('');
  };

  const current = isBoss ? levelData.boss : levelData.quests[questIndex];

  return (
    <div className="p-6 bg-yellow-100 rounded-lg shadow-xl border-4 border-yellow-900 relative">
      <img
        src={images.icons[isBoss ? 'boss' : 'quest']}
        alt={isBoss ? 'Boss' : 'Quest'}
        className="absolute top-2 right-2 w-8 h-8"
      />
      <h2 className="text-xl font-bold text-yellow-900 mb-2 drop-shadow">🏆 Quest in {levelData.name}</h2>
      <p className="text-yellow-800 mb-4 italic">{levelData.description}</p>
      <p className="font-semibold mb-2 text-lg">
        {isBoss ? '⚔️ Epic Boss Battle: ' : '📜 Quest: '}
        {current.question}
      </p>
      <div className="flex items-start">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Inscribe your answer, adventurer..."
          className="p-2 border border-yellow-900 rounded-lg mr-2 w-full h-24 resize-y focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-yellow-50"
        />
        <button
          onClick={handleSubmit}
          className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition hover:shadow-lg"
        >
          Sumbit
        </button>
      </div>
    </div>
  );
};

export default QuestPanel;