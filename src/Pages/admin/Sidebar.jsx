import React from 'react';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="w-1/6 bg-gray-500 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2">
          <button onClick={() => onSelect('users')} className="w-full text-left py-2 px-4 rounded hover:bg-gray-700">
            Users
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => onSelect('pariwisata')} className="w-full text-left py-2 px-4 rounded hover:bg-gray-700">
            Pariwisata
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => onSelect('articles')} className="w-full text-left py-2 px-4 rounded hover:bg-gray-700">
            Articles
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
