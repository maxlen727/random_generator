import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const RandomNumberGenerator: React.FC = () => {
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum
          </label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Maximum
          </label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
      <button
        onClick={generateNumber}
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Generate Random Number
      </button>
      <div className="h-32 flex items-center justify-center">
        {result !== null && (
          <div className="text-center animate-fade-in">
            <p className="text-lg font-semibold text-gray-700 mb-2">Result:</p>
            <p className="text-6xl font-bold text-blue-600 animate-number">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomNumberGenerator;