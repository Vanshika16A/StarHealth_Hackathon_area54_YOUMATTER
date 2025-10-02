import React, { useState } from 'react';
import RewardsShop from '../components/features/RewardsShop';

export default function RewardsScreen() {
  const [coins] = useState(1250);
  return (
    <div className="p-4">
      <RewardsShop coins={coins} />
    </div>
  );
}
