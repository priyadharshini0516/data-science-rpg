import React from 'react';
import { levels } from '../data/levels';
import { images } from '../assets/images';

const GameMap = ({ currentLevel, setCurrentLevel, highestUnlockedLevel }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-center text-yellow-900 mb-4 drop-shadow-md">🗺️ Adventure Map</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {levels.map((lvl) => (
        <button
          key={lvl.id}
          onClick={() => lvl.id <= highestUnlockedLevel && setCurrentLevel(lvl.id)}
          disabled={lvl.id > highestUnlockedLevel}
          className={`relative p-4 rounded-lg shadow-md transition transform hover:scale-105 overflow-hidden ${
            lvl.id === currentLevel
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
              : lvl.id <= highestUnlockedLevel
              ? 'bg-green-200 text-green-900 hover:bg-green-300'
              : 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-70'
          }`}
        >
          <img
            src={images.levels[lvl.id]}
            alt={lvl.name}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10">
            <span className="font-semibold text-lg">{lvl.name}</span>
            {lvl.id > highestUnlockedLevel && <span className="ml-2">🔒</span>}
          </div>
        </button>
      ))}
    </div>
  </div>
);

export default GameMap;