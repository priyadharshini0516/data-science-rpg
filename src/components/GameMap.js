import React from 'react';
import { levels } from '../data/levels';

const GameMap = ({ currentLevel, setCurrentLevel, highestUnlockedLevel }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-center text-amber-900 mb-4">🌍 World Map</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {levels.map((lvl) => (
        <button
          key={lvl.id}
          onClick={() => lvl.id <= highestUnlockedLevel && setCurrentLevel(lvl.id)}
          disabled={lvl.id > highestUnlockedLevel}
          className={`p-4 rounded-lg shadow-md transition transform hover:scale-105 ${
            lvl.id === currentLevel
              ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-white'
              : lvl.id <= highestUnlockedLevel
              ? 'bg-green-100 text-green-900 hover:bg-green-200'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <span className="font-semibold">Level {lvl.id}: {lvl.name}</span>
          {lvl.id > highestUnlockedLevel && <span> 🔒 Locked</span>}
        </button>
      ))}
    </div>
  </div>
);

export default GameMap;