import React, { useState, useEffect } from 'react';
import { Dice5, Upload } from 'lucide-react';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import RandomItemGenerator from './components/RandomItemGenerator';

function App() {
  const [activeTab, setActiveTab] = useState<'number' | 'item'>('number');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 flex items-center">
          <Dice5 className="mr-2 text-blue-500" /> Random Generator
        </h1>
      </header>
      <main className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md transition-all duration-300 ease-in-out transform hover:scale-105">
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 px-4 ${
              activeTab === 'number'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            } rounded-l-lg focus:outline-none transition-colors duration-300 ease-in-out`}
            onClick={() => setActiveTab('number')}
          >
            Number
          </button>
          <button
            className={`flex-1 py-2 px-4 ${
              activeTab === 'item'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            } rounded-r-lg focus:outline-none transition-colors duration-300 ease-in-out`}
            onClick={() => setActiveTab('item')}
          >
            Item
          </button>
        </div>
        {activeTab === 'number' ? (
          <RandomNumberGenerator />
        ) : (
          <RandomItemGenerator />
        )}
      </main>
    </div>
  );
}

export default App;