const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Demo data
const quests = [
	{ name: 'Complete 10,000 Steps', coins: 50, completed: true },
	{ name: 'Modlit St & S', coins: 20, completed: false },
	{ name: 'Drink 8 Glasses of Water', coins: 30, completed: true },
	{ name: 'Meditate for 10 Minutes', coins: 20, completed: false },
];
const leaderboard = [
	{ name: 'Sarah M', steps: 15200, kcal: 550, streak: 14 },
	{ name: 'Alex C', steps: 14800, kcal: 530, streak: 7 },
	{ name: 'Ben T', steps: 14100, kcal: 490, streak: 9 },
	{ name: 'David L', steps: 11500, kcal: 500, streak: 5 },
	{ name: 'Emily R', steps: 11500, kcal: 480, streak: 8 },
];
const rewards = [
	{ name: '10% Off Premium Discounts', cost: 500, locked: false },
	{ name: 'Free Annual Health Check', cost: 300, locked: true },
	{ name: 'Healthy Living Snacks', cost: 300, locked: true },
	{ name: 'Healthy Market', cost: 500, locked: true },
];
const avatar = { level: 15, arMode: false, status: 'Peak Performance', sleepGoalMissed: true };
const treasureHunt = { credits: 250, steps: 50, chests: [5,10,15,20,25,30,35,40,45,50] };
const profile = { name: 'Mark', coins: 1250, wellnessCredits: 250 };

app.get('/quests', (req, res) => res.json(quests));
app.get('/leaderboard', (req, res) => res.json(leaderboard));
app.get('/rewards', (req, res) => res.json(rewards));
app.post('/rewards', (req, res) => {
	const { item } = req.body;
	// Simulate redemption logic
	if (item) {
		return res.json({ success: true, item });
	}
	res.status(400).json({ success: false });
});
app.get('/avatar', (req, res) => res.json(avatar));
app.get('/treasure-hunt', (req, res) => res.json(treasureHunt));
app.get('/profile', (req, res) => res.json(profile));

// Blockchain/NFT stub
app.get('/nft', (req, res) => res.json({ nft: 'Demo NFT Data', owner: profile.name }));

// AI mini-coach stub
app.get('/coach', (req, res) => res.json({ message: "Hey Mark! You're only 500 steps from your goal! Let's get moving!" }));

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
