import React, { useState, useEffect } from 'react';

interface RandomNumberGeneratorProps {
  darkMode: boolean;
}

const RandomNumberGenerator: React.FC<RandomNumberGeneratorProps> = ({ darkMode }) => {
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const savedMin = localStorage.getItem('randomNumberMin');
    const savedMax = localStorage.getItem('randomNumberMax');
    if (savedMin) setMin(parseInt(savedMin));
    if (savedMax) setMax(parseInt(savedMax));
  }, []);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult(null);
    setTimeout(() => setResult(randomNumber), 50);
    localStorage.setItem('randomNumberMin', min.toString());
    localStorage.setItem('randomNumberMax', max.toString());
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            最小值
          </label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(parseInt(e.target.value))}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
          />
        </div>
        <div className="flex-1">
          <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            最大值
          </label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(parseInt(e.target.value))}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
          />
        </div>
      </div>
      <button
        onClick={generateNumber}
        className={`w-full text-white py-3 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500' : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400'}`}
      >
        生成随机数
      </button>
      <div className="h-32 flex items-center justify-center">
        {result !== null && (
          <div className="text-center animate-fade-in">
            <p className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>结果：</p>
            <p className="text-6xl font-bold text-blue-500 animate-number">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomNumberGenerator;