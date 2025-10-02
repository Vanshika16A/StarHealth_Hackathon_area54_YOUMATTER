import React, { useState } from 'react';
import DailyQuests from '../components/features/DailyQuests';
import AIMiniCoach from '../components/features/AIMiniCoach';

export default function HomeScreen() {
  const [streak] = useState(7);
  return (
    <div className="p-4">
      <DailyQuests streak={streak} />
      <div className="mt-4">
        <AIMiniCoach message="Hey Mark! You're only 500 steps from your goal! Let's get moving!" />
      </div>
    </div>
  );
}
