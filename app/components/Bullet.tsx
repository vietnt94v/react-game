import React from 'react';
import { BulletProps, BulletDirection } from '../models/Bullet';

const Bullet = ({ config }: BulletProps) => {
  const bullet = {
    size: 32,
    gap: 4,
  };

  const getBulletStyle = () => {
    const positionStyle = {
      top: (config.position.y - 1) * (bullet.size + bullet.gap),
      left: (config.position.x - 1) * (bullet.size + bullet.gap),
    };

    return {
      ...positionStyle,
    };
  };

  return (
    <>
      <div className="absolute" style={getBulletStyle()}>
        <div className="flex justify-center items-center border border-yellow-500 bg-yellow-900 bg-opacity-80 w-8 aspect-square">
          o
        </div>
      </div>
    </>
  );
};

export default Bullet;
