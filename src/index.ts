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

export enum Attribute {
  acceleration = 'acceleration',
  aggression = 'aggression',
  agility = 'agility',
  balance = 'balance',
  ballcontrol = 'ballcontrol',
  crossing = 'crossing',
  curve = 'curve',
  dribbling = 'dribbling',
  finishing = 'finishing',
  freekickaccuracy = 'freekickaccuracy',
  gkdiving = 'gkdiving',
  gkhandling = 'gkhandling',
  gkkicking = 'gkkicking',
  gkkickstyle = 'gkkickstyle',
  gkpositioning = 'gkpositioning',
  gkreflexes = 'gkreflexes',
  gksavetype = 'gksavetype',
  headingaccuracy = 'headingaccuracy',
  interceptions = 'interceptions',
  jumping = 'jumping',
  longpassing = 'longpassing',
  longshots = 'longshots',
  marking = 'marking',
  penalties = 'penalties',
  positioning = 'positioning',
  reactions = 'reactions',
  shortpassing = 'shortpassing',
  shotpower = 'shotpower',
  slidingtackle = 'slidingtackle',
  sprintspeed = 'sprintspeed',
  stamina = 'stamina',
  standingtackle = 'standingtackle',
  strength = 'strength',
  vision = 'vision',
  volleys = 'volleys'
}

export type FifaRatingAttributes = Record<Attribute, number>;

export type FifaRatingPositionConfig = Partial<FifaRatingAttributes>;

export type FifaRatingConfig = Record<Position, FifaRatingPositionConfig>;

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

export const fifaRatingPositionConfig = (fifa: Fifa, position: Position): FifaRatingPositionConfig => {
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

export const fifaRatingAttributes = (defaultValue: number = 50): FifaRatingAttributes => {
  return Object.values(Attribute)
    .map((attr) => ({ [attr]: defaultValue }))
    .reduce((acc, cur) => {
      acc = {
        ...acc,
        ...cur
      };
      return acc;
    }, {}) as FifaRatingAttributes;
};

export const calculateRawOverall = (attributes: FifaRatingAttributes, fifa: Fifa, position: Position): number => {
  const positionConfig = fifaRatingPositionConfig(fifa, position);
  const rawOverall = Object.entries(positionConfig).reduce((acc, [k, v]) => {
    const key = k as Attribute;
    const value = v;
    return acc + attributes[key] * value;
  }, 0);
  return Math.min(Math.round(rawOverall), 99);
};

// valid for FIFA 12 - 16 (rest should be checked)
export const calculateDisplayOverall = (attributes: FifaRatingAttributes, fifa: Fifa, position: Position, reputation: number): number => {
  const rawOverall = calculateRawOverall(attributes, fifa, position);
  if(reputation === 3) {
    if(rawOverall > 50) {
      return Math.min(rawOverall + 1, 99);
    }
  } else if(reputation === 4) {
    if(rawOverall >= 67) {
      return Math.min(rawOverall + 2, 99);
    }
    if(rawOverall >= 33) {
      return Math.min(rawOverall + 1, 99);
    }
  } else if(reputation === 5) {
    if(rawOverall >= 75) {
      return Math.min(rawOverall + 3, 99);
    }
    if(rawOverall >= 50) {
      return Math.min(rawOverall + 2, 99);
    }
    if(rawOverall >= 25) {
      return Math.min(rawOverall + 1, 99);
    }
  }
  return rawOverall;
}
