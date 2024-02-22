'use client';
import React, { useState } from 'react';

interface IGrid {
  width: number;
  height: number;
}

const Grid = ({ ...props }) => {
  const [grid, setGrid] = useState<IGrid>({
    width: props.width || 10,
    height: props.height || 20,
  });

  return (
    <>
      <div className={`space-y-1 text-sm`}>
        {Array(grid.height)
          .fill('')
          .map((_, indexCol) => (
            <div key={indexCol} className=''>
              <div className='flex space-x-1'>
                {Array(grid.width)
                  .fill('')
                  .map((_, indexRow) => (
                    <div
                      key={indexRow}
                      className='bg-indigo-900 w-8 aspect-square flex items-center justify-center '
                    >
                      <span className='opacity-50'>{`${indexRow + 1} ${indexCol + 1}`}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Grid;
