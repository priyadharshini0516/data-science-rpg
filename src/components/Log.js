import React from 'react';

const Log = ({ logEntries }) => (
  <div className="log">
    <h3>Adventure Log</h3>
    {logEntries.map((entry, idx) => <p key={idx}>{entry}</p>)}
  </div>
);

export default Log;