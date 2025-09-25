import React from 'react';
import { levels } from '../data/levels';

const GameMap = ({ currentLevel }) => (
  <div className="game-map">
    <h2>World Map</h2>
    {levels.map((lvl) => (
      <div key={lvl.id} className={`level ${lvl.id === currentLevel ? 'current-level' : ''}`}>
        Level {lvl.id}: {lvl.name} {lvl.id > currentLevel ? '(Locked)' : ''}
      </div>
    ))}
  </div>
);

export default GameMap;