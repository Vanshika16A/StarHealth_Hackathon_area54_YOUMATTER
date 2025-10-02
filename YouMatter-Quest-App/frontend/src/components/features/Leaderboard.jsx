import React, { useEffect, useState } from 'react';

const groups = [
  { icon: '🏢', name: 'Office Fitness Fanatics' },
  { icon: '🏠', name: 'Society Walkers - Block B' },
  { icon: '🏃', name: 'Marathon Trainees - City Running Club' },
  { icon: '🧘', name: 'Yoga & Meditation Circle' },
];

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/leaderboard')
      .then(res => res.json())
      .then(data => setLeaderboard(data));
  }, []);

  const handleInvite = async () => {
    setMessage('Invitation sent to colleagues!');
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Community Challenges</h2>
      <div className="flex mb-4">
        <div className="bg-blue-50 rounded-lg p-2 mr-4">
          {groups.map((g, i) => (
            <div key={i} className="flex items-center mb-2">
              <span className="text-2xl mr-2">{g.icon}</span>
              <span>{g.name}</span>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Leaderboard - Office Fitness Fanatics</h3>
          <div className="flex space-x-2 mb-2">
            <button className="px-3 py-1 bg-blue-500 text-white rounded">Steps</button>
            <button className="px-3 py-1 bg-gray-200 rounded">Calories</button>
            <button className="px-3 py-1 bg-gray-200 rounded">Active Streak</button>
          </div>
          <ul>
            {leaderboard.map((user, i) => (
              <li key={i} className="flex items-center justify-between py-2 border-b">
                <span className="font-bold">{i + 1}.</span>
                <span>{user.name}</span>
                <span>{user.steps} steps</span>
                <span>{user.kcal} kcal</span>
                <span>🔥 {user.streak}-day streak</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleInvite}>Invite Colleagues</button>
            <div className="text-xs mt-2">Group Goal: 1,000,000 Steps This Month!</div>
            {message && <div className="mt-2 text-green-600 text-sm">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
