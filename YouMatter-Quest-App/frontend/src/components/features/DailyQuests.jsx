import React, { useEffect, useState } from 'react';

export default function DailyQuests({ streak }) {
  const [quests, setQuests] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/quests')
      .then(res => res.json())
      .then(data => setQuests(data));
  }, []);

  const handleComplete = async (name) => {
    // Simulate quest completion
    setMessage(`Completed: ${name}`);
  };

  const handleViewMore = async () => {
    // Simulate fetching more quests
    setMessage('More quests loaded!');
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Your Daily Quests</h2>
      <ul className="mb-4">
        {quests.map((q, i) => (
          <li key={i} className="flex justify-between items-center py-2">
            <span className={q.completed ? 'line-through text-gray-400' : ''}>{q.name}</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">+{q.coins} Coins</span>
            {!q.completed && (
              <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleComplete(q.name)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-500 text-white py-2 rounded mb-4" onClick={handleViewMore}>View More Quests</button>
      <div className="bg-pink-100 text-pink-800 p-3 rounded flex items-center justify-between">
        <span className="font-bold">{streak}-Day Active Streak!</span>
        <span>Your Rewards are Multiplying!</span>
      </div>
      <p className="text-xs text-gray-500 mt-2">Reach 10 Days for a Bonus Chest!</p>
      {message && <div className="mt-2 text-green-600 text-sm">{message}</div>}
    </div>
  );
}
