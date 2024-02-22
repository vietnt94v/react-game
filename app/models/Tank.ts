export enum TankDirection {
  Left = 'left',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
}

export interface TankProps {
  config: {
    position: {
      x: number;
      y: number;
    };
    direction: TankDirection;
  };
}
