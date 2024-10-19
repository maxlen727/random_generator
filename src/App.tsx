import React, { useState, useEffect } from 'react';
import { Dice5, Moon, Sun } from 'lucide-react';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import RandomItemGenerator from './components/RandomItemGenerator';

function App() {
  const [activeTab, setActiveTab] = useState<'number' | 'item'>('number');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
      <header className="mb-8 relative w-full max-w-md">
        <h1 className={`text-5xl font-bold flex items-center justify-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <Dice5 className="mr-2 text-blue-500" /> 随机生成器
        </h1>
        <button
          onClick={toggleDarkMode}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-600" />}
        </button>
      </header>
      <main className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-2xl rounded-lg p-8 w-full max-w-md transition-all duration-300 ease-in-out transform hover:scale-105`}>
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 px-4 ${
              activeTab === 'number'
                ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
            } rounded-l-lg focus:outline-none transition-colors duration-300 ease-in-out`}
            onClick={() => setActiveTab('number')}
          >
            数字
          </button>
          <button
            className={`flex-1 py-2 px-4 ${
              activeTab === 'item'
                ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
            } rounded-r-lg focus:outline-none transition-colors duration-300 ease-in-out`}
            onClick={() => setActiveTab('item')}
          >
            项目
          </button>
        </div>
        {activeTab === 'number' ? (
          <RandomNumberGenerator darkMode={darkMode} />
        ) : (
          <RandomItemGenerator darkMode={darkMode} />
        )}
      </main>
      <footer className={`mt-8 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Made with ♥️&✨ for 2312
      </footer>
    </div>
  );
}

export default App;