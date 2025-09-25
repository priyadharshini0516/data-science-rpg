import React from 'react';

const StatusBar = ({ level, xp, inventory }) => (
  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow-lg mb-6">
    <span className="text-lg font-bold">🏆 Level: {level}</span>
    <span className="text-lg">⚡ XP: {xp} / {level * 200}</span>
    <span className="text-lg">🎒 Inventory: {inventory.join(', ') || 'Empty'}</span>
  </div>
);

export default StatusBar;