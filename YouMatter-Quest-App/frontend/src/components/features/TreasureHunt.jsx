import React, { useEffect, useState } from 'react';

export default function TreasureHunt({ credits }) {
  const [steps, setSteps] = useState([]);
  const [chests, setChests] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/treasure-hunt')
      .then(res => res.json())
      .then(data => {
        setSteps(Array.from({ length: data.steps }, (_, i) => i + 1));
        setChests(data.chests);
      });
  }, []);

  const handleOpenChest = (num) => {
    setMessage(`Congratulations! You unlocked a treasure at step ${num}.`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Insurance Treasure Hunt</h2>
      <div className="flex items-center mb-2">
        <span className="font-bold text-yellow-600">{credits} Wellness Credits</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-full h-32 mb-4">
          <svg width="100%" height="100" viewBox="0 0 400 100">
            <path d="M 10 90 Q 100 10 200 90 Q 300 170 390 90" stroke="#7dd3fc" strokeWidth="6" fill="none" />
            {chests.map((c, i) => (
              <circle key={i} cx={c * 7} cy={90 - (i % 2) * 40} r="12" fill="#fde68a" />
            ))}
          </svg>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {steps.map((s) => (
            <div key={s} className={`w-8 h-8 flex items-center justify-center rounded-full ${chests.includes(s) ? 'bg-yellow-300 cursor-pointer' : 'bg-blue-100'}`}
              onClick={() => chests.includes(s) && handleOpenChest(s)}>{s}</div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <span className="font-bold">Every Step Counts!</span>
          <span className="ml-4">Unlock Your Rewards!</span>
        </div>
        {message && <div className="mt-2 text-green-600 text-sm">{message}</div>}
      </div>
    </div>
  );
}
