import React from 'react';

const Log = ({ logEntries }) => (
  <div className="mt-6 p-4 bg-blue-50 rounded-lg shadow-lg max-h-48 overflow-y-auto border border-blue-200">
    <h3 className="text-lg font-bold text-blue-900 mb-2">📜 Adventure Log</h3>
    {logEntries.map((entry, idx) => (
      <p key={idx} className="text-blue-800">{entry}</p>
    ))}
  </div>
);

export default Log;