'use client';
import { useEffect, useState } from 'react';
import Grid from './components/Grid';
import Tank from './components/Tank';
import Bullet from './components/Bullet';
import { TankDirection } from './models/Tank';
import { BulletDirection } from './models/Bullet';

export default function Home() {
  const [configTank, setConfigTank] = useState({
    position: { x: 5, y: 7 },
    direction: TankDirection.Right,
  });
  const [configBullet, setConfigBullet] = useState({
    position: { x: 5, y: 7 },
    direction: BulletDirection.Right,
  });
  const [bullets, setBullets] = useState<JSX.Element[]>([]);

  const handleGun = () => {
    console.log('x: ' + configTank.position.x);
    console.log('y: ' + configTank.position.y);
    const newBullet = <Bullet key={Date.now()} config={configBullet} />;
    setBullets((preview) => [...preview, newBullet]);

    setTimeout(() => {
      setBullets((preview) => preview.filter((item) => item !== newBullet));
    }, 10000);
  };

  const handleKeyboradPress = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        setConfigTank((previewConfig) => ({
          ...previewConfig,
          position: {
            ...previewConfig.position,
            y:
              previewConfig.direction !== TankDirection.Top
                ? previewConfig.position.y
                : previewConfig.position.y > 2
                ? previewConfig.position.y - 1
                : previewConfig.position.y,
          },
          direction: TankDirection.Top,
        }));
        break;
      case 'ArrowDown':
        setConfigTank((previewConfig) => ({
          ...previewConfig,
          position: {
            ...previewConfig.position,
            y:
              previewConfig.direction !== TankDirection.Bottom
                ? previewConfig.position.y
                : previewConfig.position.y < 14
                ? previewConfig.position.y + 1
                : previewConfig.position.y,
          },
          direction: TankDirection.Bottom,
        }));
        break;
      case 'ArrowLeft':
        setConfigTank((previewConfig) => ({
          ...previewConfig,
          position: {
            ...previewConfig.position,
            x:
              previewConfig.direction !== TankDirection.Left
                ? previewConfig.position.x
                : previewConfig.position.x > 2
                ? previewConfig.position.x - 1
                : previewConfig.position.x,
          },
          direction: TankDirection.Left,
        }));
        break;
      case 'ArrowRight':
        setConfigTank((previewConfig) => ({
          ...previewConfig,
          position: {
            ...previewConfig.position,
            x:
              previewConfig.direction !== TankDirection.Right
                ? previewConfig.position.x
                : previewConfig.position.x < 29
                ? previewConfig.position.x + 1
                : previewConfig.position.x,
          },
          direction: TankDirection.Right,
        }));
        break;
      case ' ':
        handleGun();
      default:
        break;
    }
  };

  useEffect(() => {
    setConfigBullet({
      position: { x: configTank.position.x, y: configTank.position.y },
      direction: BulletDirection.Right,
    });
  }, [configTank]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboradPress);
    return () => {
      window.removeEventListener('keydown', handleKeyboradPress);
    };
  }, []);

  return (
    <main className="font-mono">
      <div className="relative">
        <Grid width={30} height={15} />
        <Tank config={configTank} />
        {bullets.map((item) => item)}
      </div>
      <div className="inline-block mt-3 p-3 border border-dashed border-white">
        <div>Tank position:</div>
        <div className="pl-5">- Top: {configTank.position.x}</div>
        <div className="pl-5">- Left: {configTank.position.y}</div>
        <div className="pl-5">- Direction: {configTank.direction}</div>
        <div>---------------</div>
        <div>Bullet:</div>
        <div className="pl-5">- Top: {configBullet.position.x}</div>
        <div className="pl-5">- Left: {configBullet.position.y}</div>
        <div className="pl-5">- Direction: {configBullet.direction}</div>
      </div>
    </main>
  );
}
