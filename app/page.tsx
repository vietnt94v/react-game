'use client';
import { useState } from 'react';
import Grid from './components/Grid';
import Tank from './components/Tank';
import { TankDirection } from './models/Tank';

export default function Home() {
  const [configTank, setConfigTank] = useState({
    position: { x: 4, y: 6 },
    direction: TankDirection.Bottom,
  });

  const handleDirectionTank = () => {
    console.log('move');
  };

  return (
    <main className='font-mono'>
      <div className='relative'>
        <Grid width={30} height={15} />
        <Tank config={configTank}/>
      </div>
    </main>
  );
}
