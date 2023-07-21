import { fifa12, fifa13, fifa14, fifa15, fifa16 } from './config';

export enum Position {
  GK = 'GK', // Goalkeeper
  SW = 'SW', // Sweeper
  RWB = 'RWB', // Right Wing Back
  RB = 'RB', // Right Back
  RCB = 'RCB', // Right Centre Back
  CB = 'CB', // Center Back
  LCB = 'LCB', // Left Centre back
  LB = 'LB', // Left Back
  LWB = 'LWB', // Left Wing Back
  RDM = 'RDM', // Right Defensive Midfielder
  CDM = 'CDM', // Central Defensive Midfielder
  LDM = 'LDM', // Left Defensive Midfielder
  RM = 'RM', // Right Midfielder
  RCM = 'RCM', // Right Central Midfielder
  CM = 'CM', // Central Midfielder
  LCM = 'LCM', // Left Central Midfielder
  LM = 'LM', // Left Midfielder
  RAM = 'RAM', // Right Attacking Midfielder
  CAM = 'CAM', // Central Attacking Midfielder
  LAM = 'LAM', // Left Attacking Midfielder
  RF = 'RF', // Right Forward
  CF = 'CF', // Center Forward
  LF = 'LF', // Left Forward
  RW = 'RW', // Right Winger
  RS = 'RS', // Right Striker
  ST = 'ST', // Striker
  LS = 'LS', // Left Striker
  LW = 'LW' // Left Winger
}

export enum Fifa {
  Fifa12 = 'fifa12',
  Fifa13 = 'fifa13',
  Fifa14 = 'fifa14',
  Fifa15 = 'fifa15',
  Fifa16 = 'fifa16'
}

export type RatingPositionConfig = Record<string, number>;

export type FifaRatingConfig = Record<Position, RatingPositionConfig>;

export const fifaRatingConfig = (fifa: Fifa): FifaRatingConfig => {
  switch (fifa) {
    case Fifa.Fifa12:
      return fifa12;
    case Fifa.Fifa13:
      return fifa13;
    case Fifa.Fifa14:
      return fifa14;
    case Fifa.Fifa15:
      return fifa15;
    case Fifa.Fifa16:
      return fifa16;
    default:
      return undefined;
  }
};

export const fifaRatingPositionConfig = (fifa: Fifa, position: Position): RatingPositionConfig => {
  switch (fifa) {
    case Fifa.Fifa12:
      return fifa12[position];
    case Fifa.Fifa13:
      return fifa13[position];
    case Fifa.Fifa14:
      return fifa14[position];
    case Fifa.Fifa15:
      return fifa15[position];
    case Fifa.Fifa16:
      return fifa16[position];
    default:
      return undefined;
  }
};
