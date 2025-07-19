import React from 'react';

const Sidebar = ({ onNavigate }) => {
  const menu = ['Items', 'Categories', 'Customers', 'Alerts'];
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Manager Dashboard</h2>
      {menu.map((item) => (
        <button
          key={item}
          onClick={() => onNavigate(item)}
          className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;

