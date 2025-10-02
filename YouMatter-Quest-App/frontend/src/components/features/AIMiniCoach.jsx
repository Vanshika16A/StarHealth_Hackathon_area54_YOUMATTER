import React from 'react';

export default function AIMiniCoach({ message }) {
  return (
    <div className="bg-blue-50 rounded-xl shadow-md p-4 flex items-center">
      <span className="text-4xl mr-4">🤖</span>
      <div>
        <div className="font-bold">AI mini-coach</div>
        <div className="text-gray-700">{message}</div>
      </div>
    </div>
  );
}
