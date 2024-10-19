import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface RandomItemGeneratorProps {
  darkMode: boolean;
}

const RandomItemGenerator: React.FC<RandomItemGeneratorProps> = ({ darkMode }) => {
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
        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          上传项目列表（TXT）
        </label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              darkMode
                ? 'border-gray-600 bg-gray-700 hover:bg-gray-600'
                : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className={`w-10 h-10 mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <p className={`mb-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <span className="font-semibold">点击上传</span> 或拖放文件
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>TXT 文件（每行一个项目）</p>
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
        className={`w-full text-white py-3 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          darkMode
            ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 disabled:bg-gray-700 disabled:text-gray-500'
            : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400 disabled:bg-gray-300 disabled:text-gray-500'
        } disabled:cursor-not-allowed`}
      >
        生成随机项目
      </button>
      <div className="h-32 flex items-center justify-center">
        {result && (
          <div className="text-center animate-fade-in">
            <p className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>结果：</p>
            <p className="text-4xl font-bold text-blue-500 animate-item break-all">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomItemGenerator;