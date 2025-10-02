import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import RewardsScreen from './screens/RewardsScreen';
import AvatarScreen from './screens/AvatarScreen';
import TreasureHuntScreen from './screens/TreasureHuntScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/layout/BottomNav';

function App() {
	return (
		<Router>
			<div className="pb-20 min-h-screen bg-blue-50">
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/quests" element={<TreasureHuntScreen />} />
					<Route path="/rewards" element={<RewardsScreen />} />
					<Route path="/avatar" element={<AvatarScreen />} />
					<Route path="/community" element={<LeaderboardScreen />} />
					<Route path="/profile" element={<ProfileScreen />} />
				</Routes>
				<BottomNav />
			</div>
		</Router>
	);
}

export default App;
