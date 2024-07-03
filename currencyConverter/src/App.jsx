import { useState } from 'react';
import './App.css';

function App() {
  const [currencyTochange, setTochange] = useState("DOLLAR");
  const [changeTowhat, setTowhat] = useState("RUPEES");
  
  return (
    <>
      <div className="min-h-screen bg-slate-500 flex items-center justify-center p-6">
        <div className="bg-slate-800 rounded-lg shadow-lg p-8 max-w-sm w-full">
        <div className="flex mb-4">
  <input
    className="w-90 p-3 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring focus:border-blue-500"
    placeholder="Enter amount in DOLLAR"
  />
  <select className="ml-3 p-3 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring focus:border-blue-500">
    dollar, rupees
  </select>
</div>
          <div className="mb-4">
            <input
              className="w-full p-3 rounded bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Converted amount in RUPEES"
            />
          </div>
          <div className="text-center">
            <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition duration-300">
              Convert {currencyTochange} to {changeTowhat}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
