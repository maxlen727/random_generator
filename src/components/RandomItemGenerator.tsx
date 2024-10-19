import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const RandomItemGenerator: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const itemList = content.split('\n').filter((item) => item.trim() !== '');
        setItems(itemList);
      };
      reader.readAsText(file);
    }
  };

  const generateRandomItem = () => {
    if (items.length > 0) {
      setResult(null);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * items.length);
        setResult(items[randomIndex]);
      }, 50);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Item List (TXT)
        </label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">TXT file with items (one per line)</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept=".txt"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </div>
      <button
        onClick={generateRandomItem}
        disabled={items.length === 0}
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Generate Random Item
      </button>
      <div className="h-32 flex items-center justify-center">
        {result && (
          <div className="text-center animate-fade-in">
            <p className="text-lg font-semibold text-gray-700 mb-2">Result:</p>
            <p className="text-4xl font-bold text-blue-600 animate-item break-all">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomItemGenerator;