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
  Fifa16 = 'fifa16',
  Fifa17 = 'fifa17',
  Fifa18 = 'fifa18',
  Fifa19 = 'fifa19',
  Fifa20 = 'fifa20',
  Fifa21 = 'fifa21',
  Fifa22 = 'fifa22',
  Fifa23 = 'fifa23'
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
  gkpositioning = 'gkpositioning',
  gkreflexes = 'gkreflexes',
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
