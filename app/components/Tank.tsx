'use client';
import React from 'react';
import { TankProps, TankDirection } from '../models/Tank';

const Tank = ({ config }: TankProps) => {
  const tank = {
    size: 32,
    gap: 4,
  };

  const getTankStyle = () => {
    const positionStyle = {
      top: (config.position.y - 1) * (tank.size + tank.gap),
      left: (config.position.x - 1) * (tank.size + tank.gap),
    };

    const colorStyle = {
      backgroundColor: 'rgb(255 0 0 / 20%)',
    };

    const getTransformStyle = (): React.CSSProperties => {
      let rotation = 0;
      switch (config.direction) {
        case TankDirection.Right:
          rotation = 90;
          break;
        case TankDirection.Bottom:
          rotation = 180;
          break;
        case TankDirection.Left:
          rotation = 270;
          break;
        default:
          rotation = 0;
      }
      return { transform: `rotate(${rotation}deg)` };
    };

    return {
      ...positionStyle,
      ...colorStyle,
      ...getTransformStyle(),
    };
  };

  return (
    <>
      <div className='🚙 absolute' style={getTankStyle()}>
        <div className='grid grid-cols-3 gap-1 place-content-center'>
          {Array(6)
            .fill('')
            .map((_, index) => (
              <div
                key={index}
                className={
                  index === 0
                    ? 'col-start-2'
                    : index === 1
                    ? 'col-start-1'
                    : index === 5
                    ? 'col-start-3'
                    : ''
                }
              >
                <div className='flex justify-center items-center border border-red-500 bg-red-900 w-8 aspect-square'>
                  {index + 1}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Tank;
