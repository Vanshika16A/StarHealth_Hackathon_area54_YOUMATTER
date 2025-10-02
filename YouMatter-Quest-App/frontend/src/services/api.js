// Simple API service for demo
const API_BASE = 'http://localhost:5000';

export async function fetchQuests() {
  const res = await fetch(`${API_BASE}/quests`);
  return res.json();
}

export async function fetchLeaderboard() {
  const res = await fetch(`${API_BASE}/leaderboard`);
  return res.json();
}

export async function fetchRewards() {
  const res = await fetch(`${API_BASE}/rewards`);
  return res.json();
}

export async function fetchAvatar() {
  const res = await fetch(`${API_BASE}/avatar`);
  return res.json();
}

export async function fetchTreasureHunt() {
  const res = await fetch(`${API_BASE}/treasure-hunt`);
  return res.json();
}

export async function fetchProfile() {
  const res = await fetch(`${API_BASE}/profile`);
  return res.json();
}
