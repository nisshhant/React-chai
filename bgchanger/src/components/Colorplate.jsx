import React, { useState } from 'react';
import '../index.css';

function Colorplate() {
  // State to hold the background color
  const [bgColor, setBgColor] = useState('bg-white');
    const handleColorChange = (color) => {
    switch (color) {
      case 'red':
        setBgColor('bg-red-600');
        break;
      case 'blue':
        setBgColor('bg-blue-400');
        break;
      case 'green':
        setBgColor('bg-green-500');
        break;
      case 'yellow':
        setBgColor('bg-yellow-300');
        break;
      case 'pink':
        setBgColor('bg-pink-400');
        break;
      default:
        setBgColor('bg-gray-200');
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col" id="body">
        <div className={`flex-grow ${bgColor}`}></div>
        <div className="bg-gray-800 text-white p-4">
          <div className="flex flex-row justify-center items-center" id="buttons">
            <div className = "rounded-md">
            <button className="bg-red-600 rounded-md pl-5 pr-5 pt-1 pb-1 m-2" onClick={() => handleColorChange('red')}>
              RED
            </button>
            <button className="bg-blue-400 rounded-md pl-5 pr-5 pt-1 pb-1 m-2" onClick={() => handleColorChange('blue')}>
              BLUE
            </button>
            <button className="bg-green-500 rounded-md pl-5 pr-5 pt-1 pb-1 m-2" onClick={() => handleColorChange('green')}>
              GREEN
            </button>
            <button className="bg-yellow-300 rounded-md pl-5 pr-5 pt-1 pb-1 m-2" onClick={() => handleColorChange('yellow')}>
              YELLOW
            </button>
            <button className="bg-pink-400 rounded-md pl-5 pr-5 pt-1 pb-1 m-2" onClick={() => handleColorChange('pink')}>
              PINK
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Colorplate;
