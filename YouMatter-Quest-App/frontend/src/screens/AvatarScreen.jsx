import React, { useState } from 'react';
import WellnessAvatar from '../components/features/WellnessAvatar';

export default function AvatarScreen() {
  const [level] = useState(15);
  const [arMode, setARMode] = useState(false);
  return (
    <div className="p-4">
      <WellnessAvatar level={level} arMode={arMode} onToggleAR={() => setARMode(!arMode)} />
    </div>
  );
}
