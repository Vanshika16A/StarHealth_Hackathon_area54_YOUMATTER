import React, { useState } from 'react';
import TreasureHunt from '../components/features/TreasureHunt';

export default function TreasureHuntScreen() {
  const [credits] = useState(250);
  return (
    <div className="p-4">
      <TreasureHunt credits={credits} />
    </div>
  );
}
