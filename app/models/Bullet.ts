export enum BulletDirection {
  Left = 'left',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
}

export interface BulletProps {
  config: {
    position: {
      x: number;
      y: number;
    };
    direction: BulletDirection;
  };
}
