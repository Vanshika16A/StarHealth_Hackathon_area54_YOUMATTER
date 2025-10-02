
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Avatar3D() {
  const mesh = useRef();
  useFrame(() => {
    // Optionally animate or update mesh
  });
  return (
    <mesh ref={mesh} scale={[1.2, 1.2, 1.2]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#60a5fa" />
      {/* Add more shapes for body, accessories, etc. */}
    </mesh>
  );
}

export default function WellnessAvatar({ level, arMode, onToggleAR }) {
  const [nftDetails, setNftDetails] = useState(null);
  const [shareMsg, setShareMsg] = useState('');

  const handleViewNFT = async () => {
    const res = await fetch('http://localhost:5000/nft');
    const data = await res.json();
    setNftDetails(data);
  };

  const handleShare = async () => {
    setShareMsg('Progress shared!');
  };

  const handleEarnCoins = async () => {
    // Simulate earning coins
    alert('Coins earned and accessories unlocked!');
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">My Wellness Avatar</h2>
      <div className="mb-4">
        <div className="w-64 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <Avatar3D />
            <OrbitControls enablePan={false} />
          </Canvas>
        </div>
        <div className="mt-2 text-center">
          <span className="font-bold">Level {level}: Peak Performance!</span>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <div>1,0000 Steps Daily</div>
          <div>8 Hours Sleep</div>
          <div>Balanced Diet</div>
        </div>
        <div className="mt-2">
          <label className="flex items-center">
            <span className="mr-2">AR Mode</span>
            <input type="checkbox" checked={arMode} onChange={onToggleAR} className="form-checkbox" />
          </label>
        </div>
        <div className="mt-2 flex space-x-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={handleViewNFT}>View NFT Details</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={handleShare}>Share Progress</button>
        </div>
        {nftDetails && (
          <div className="mt-2 text-xs text-gray-700">NFT: {nftDetails.nft} | Owner: {nftDetails.owner}</div>
        )}
        {shareMsg && (
          <div className="mt-2 text-xs text-green-600">{shareMsg}</div>
        )}
        <div className="mt-2 text-xs text-gray-500">Missed 3-Day Sleep Goal: Avatar Weakened</div>
        <div className="mt-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleEarnCoins}>Earn Wellness Coins, Unlock Exclusive Accessories!</button>
        </div>
      </div>
    </div>
  );
}
