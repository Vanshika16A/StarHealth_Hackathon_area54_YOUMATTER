import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navs = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/quests', label: 'Quests', icon: '📝' },
  { to: '/rewards', label: 'Rewards', icon: '⭐' },
  { to: '/avatar', label: 'Avatar', icon: '🧑‍🎤' },
  { to: '/profile', label: 'Profile', icon: '👤' },
];

export default function BottomNav() {
  const location = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 z-50">
      {navs.map((nav) => (
        <Link key={nav.to} to={nav.to} className={`flex flex-col items-center text-sm ${location.pathname === nav.to ? 'text-blue-600' : 'text-gray-500'}`}>
          <span className="text-2xl">{nav.icon}</span>
          <span>{nav.label}</span>
        </Link>
      ))}
    </nav>
  );
}
