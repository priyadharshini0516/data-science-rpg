import React from 'react';

const StatusBar = ({ level, xp, inventory }) => (
  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg mb-6 animate-pulse">
    <span className="text-lg font-bold">🏰 Level: {level}</span>
    <span className="text-lg">✨ XP: {xp} / {level * 200}</span>
    <span className="text-lg">🎒 Inventory: {inventory.join(', ') || 'Empty'}</span>
  </div>
);

export default StatusBar;