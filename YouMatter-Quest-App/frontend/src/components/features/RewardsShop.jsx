import React, { useState } from 'react';

const rewards = [
  { name: '10% Off Premium Discounts', cost: 500, locked: false },
  { name: 'Free Annual Health Check', cost: 300, locked: true },
  { name: 'Healthy Living Snacks', cost: 300, locked: true },
  { name: 'Healthy Market', cost: 500, locked: true },
];

const market = [
  { name: 'Blender', cost: 700 },
  { name: 'Yoga Mat', cost: 200 },
  { name: 'Healthy Snacks', cost: 200 },
  { name: 'Chocolate Bar', cost: 150 },
];


export default function RewardsShop({ coins }) {
  const [message, setMessage] = useState('');

  const handleRedeem = async (item) => {
    // Simulate backend redeem API
    const res = await fetch('http://localhost:5000/rewards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item })
    });
    if (res.ok) {
      setMessage(`Redeemed: ${item}`);
    } else {
      setMessage('Redemption failed.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Your Rewards Shop</h2>
      <div className="mb-4">
        {rewards.map((r, i) => (
          <div key={i} className={`flex justify-between items-center p-2 rounded ${r.locked ? 'bg-gray-100' : 'bg-green-50'}`}>
            <span>{r.name}</span>
            <span className="font-bold">{r.cost} Wellness Credits</span>
            <button className={`px-3 py-1 rounded ${r.locked ? 'bg-gray-400 text-white' : 'bg-blue-500 text-white'}`} disabled={r.locked} onClick={() => handleRedeem(r.name)}>Redeem</button>
          </div>
        ))}
      </div>
      <h3 className="font-semibold mb-2">Healthy Living Market</h3>
      <div className="grid grid-cols-2 gap-2">
        {market.map((m, i) => (
          <div key={i} className="flex flex-col items-center bg-blue-50 p-2 rounded">
            <span>{m.name}</span>
            <span className="font-bold">{m.cost}</span>
            <button className="bg-blue-500 text-white px-2 py-1 rounded mt-2" onClick={() => handleRedeem(m.name)}>Redeem</button>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => handleRedeem('Avatar Level Up')}>Unlock Bigger Savings as Your Avatar Levels Up!</button>
      </div>
      {message && <div className="mt-2 text-green-600 text-sm">{message}</div>}
    </div>
  );
}
