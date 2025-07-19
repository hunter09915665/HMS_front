import React from 'react';

const Alert = () => {
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-xl font-bold mb-4">System Alerts</h2>
      <ul className="list-disc pl-6">
        <li>Low stock: Nails (5 left)</li>
        <li>Out of stock: Screws</li>
      </ul>
    </div>
  );
};

export default Alert;
