import React from 'react';

const StatusBar = ({ level, xp, inventory }) => (
  <div className="status-bar">
    <span>Level: {level}</span>
    <span>XP: {xp} / {level * 200}</span>
    <span>Inventory: {inventory.join(', ') || 'None'}</span>
  </div>
);

export default StatusBar;