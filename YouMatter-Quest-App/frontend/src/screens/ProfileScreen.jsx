import React from 'react';

export default function ProfileScreen() {
  return (
    <div className="p-4">
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-5xl mb-2">👤</div>
        <div className="font-bold text-lg mb-2">Your Profile</div>
        <div className="text-gray-600">Name: Mark</div>
        <div className="text-gray-600">Coins: 1,250</div>
        <div className="text-gray-600">Wellness Credits: 250</div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
      </div>
    </div>
  );
}
