import {
  Attribute,
  Fifa,
  FifaRatingAttributes,
  Position,
  calculateDisplayOverall,
  calculateRawOverall,
  fifaRatingAttributes,
  fifaRatingConfig,
  fifaRatingPositionConfig
} from '../src';

describe('fifaRatingConfig', () => {
  it('returns correct config for Fifa 12', () => {
    expect(fifaRatingConfig(Fifa.Fifa12)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 13', () => {
    expect(fifaRatingConfig(Fifa.Fifa13)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 14', () => {
    expect(fifaRatingConfig(Fifa.Fifa14)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 15', () => {
    expect(fifaRatingConfig(Fifa.Fifa15)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 16', () => {
    expect(fifaRatingConfig(Fifa.Fifa16)).toBeInstanceOf(Object);
  });
});

describe('fifaRatingPositionConfig', () => {
  it('returns correct config for Fifa 12 for specific position', () => {
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.GK)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.SW)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.RWB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.RB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.RCB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.CB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.LCB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.LB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.LWB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.RDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.CDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.LDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.RM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.RCM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.CM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.LCM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.LM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.RF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.CF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.LF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.RW)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.RS)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.ST)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.LS)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa12, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 13 for specific position', () => {
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.GK)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.SW)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.RWB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.RB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.RCB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.CB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.LCB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.LB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.LWB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.RDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.CDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.LDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.RM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.RCM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.CM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.LCM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.LM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.RF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.CF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.LF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.RW)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.RS)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.ST)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.LS)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa13, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 14 for specific position', () => {
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.GK)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.SW)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.RWB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.RB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.RCB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.CB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.LCB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.LB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.LWB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.RDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.CDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.LDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.RM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.RCM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.CM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.LCM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.LM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.RF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.CF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.LF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.RW)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.RS)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.ST)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.LS)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa14, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 15 for specific position', () => {
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.GK)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.SW)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.RWB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.RB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.RCB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.CB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.LCB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.LB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.LWB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.RDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.CDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.LDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.RM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.RCM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.CM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.LCM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.LM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.RF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.CF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.LF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.RW)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.RS)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.ST)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.LS)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa15, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 16 for specific position', () => {
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.GK)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.SW)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.RWB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.RB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.RCB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.CB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.LCB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.LB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.LWB)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.RDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.CDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.LDM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.RM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.RCM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.CM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.LCM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.LM)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.RF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.CF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.LF)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.RW)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.RS)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.ST)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.LS)).toBeInstanceOf(Object);
    expect(fifaRatingPositionConfig(Fifa.Fifa16, Position.LW)).toBeInstanceOf(Object);
  });
});

describe('fifaRatingAttributes', () => {
  it('should return an object with default values for all attributes', () => {
    const expectedDefaultAttributes: FifaRatingAttributes = {
      [Attribute.acceleration]: 50,
      [Attribute.aggression]: 50,
      [Attribute.agility]: 50,
      [Attribute.balance]: 50,
      [Attribute.ballcontrol]: 50,
      [Attribute.crossing]: 50,
      [Attribute.curve]: 50,
      [Attribute.dribbling]: 50,
      [Attribute.finishing]: 50,
      [Attribute.freekickaccuracy]: 50,
      [Attribute.gkdiving]: 50,
      [Attribute.gkhandling]: 50,
      [Attribute.gkkicking]: 50,
      [Attribute.gkkickstyle]: 50,
      [Attribute.gkpositioning]: 50,
      [Attribute.gkreflexes]: 50,
      [Attribute.gksavetype]: 50,
      [Attribute.headingaccuracy]: 50,
      [Attribute.interceptions]: 50,
      [Attribute.jumping]: 50,
      [Attribute.longpassing]: 50,
      [Attribute.longshots]: 50,
      [Attribute.marking]: 50,
      [Attribute.penalties]: 50,
      [Attribute.positioning]: 50,
      [Attribute.reactions]: 50,
      [Attribute.shortpassing]: 50,
      [Attribute.shotpower]: 50,
      [Attribute.slidingtackle]: 50,
      [Attribute.sprintspeed]: 50,
      [Attribute.stamina]: 50,
      [Attribute.standingtackle]: 50,
      [Attribute.strength]: 50,
      [Attribute.vision]: 50,
      [Attribute.volleys]: 50
    };
    const result = fifaRatingAttributes();
    expect(result).toEqual(expectedDefaultAttributes);
  });

  it('should return an object with custom default value for all attributes', () => {
    const customDefaultValue = 80;
    const expectedCustomAttributes: FifaRatingAttributes = {
      [Attribute.acceleration]: customDefaultValue,
      [Attribute.aggression]: customDefaultValue,
      [Attribute.agility]: customDefaultValue,
      [Attribute.balance]: customDefaultValue,
      [Attribute.ballcontrol]: customDefaultValue,
      [Attribute.crossing]: customDefaultValue,
      [Attribute.curve]: customDefaultValue,
      [Attribute.dribbling]: customDefaultValue,
      [Attribute.finishing]: customDefaultValue,
      [Attribute.freekickaccuracy]: customDefaultValue,
      [Attribute.gkdiving]: customDefaultValue,
      [Attribute.gkhandling]: customDefaultValue,
      [Attribute.gkkicking]: customDefaultValue,
      [Attribute.gkkickstyle]: customDefaultValue,
      [Attribute.gkpositioning]: customDefaultValue,
      [Attribute.gkreflexes]: customDefaultValue,
      [Attribute.gksavetype]: customDefaultValue,
      [Attribute.headingaccuracy]: customDefaultValue,
      [Attribute.interceptions]: customDefaultValue,
      [Attribute.jumping]: customDefaultValue,
      [Attribute.longpassing]: customDefaultValue,
      [Attribute.longshots]: customDefaultValue,
      [Attribute.marking]: customDefaultValue,
      [Attribute.penalties]: customDefaultValue,
      [Attribute.positioning]: customDefaultValue,
      [Attribute.reactions]: customDefaultValue,
      [Attribute.shortpassing]: customDefaultValue,
      [Attribute.shotpower]: customDefaultValue,
      [Attribute.slidingtackle]: customDefaultValue,
      [Attribute.sprintspeed]: customDefaultValue,
      [Attribute.stamina]: customDefaultValue,
      [Attribute.standingtackle]: customDefaultValue,
      [Attribute.strength]: customDefaultValue,
      [Attribute.vision]: customDefaultValue,
      [Attribute.volleys]: customDefaultValue
    };
    const result = fifaRatingAttributes(customDefaultValue);
    expect(result).toEqual(expectedCustomAttributes);
  });
});

describe('calculateRawOverall', () => {
  it('should return raw overall for GK', () => {
    expect(calculateRawOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.GK)).toEqual(25);
    expect(calculateRawOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.GK)).toEqual(50);
    expect(calculateRawOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.GK)).toEqual(75);
  });

  it('should return raw overall for CB', () => {
    expect(calculateRawOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CB)).toEqual(25);
    expect(calculateRawOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CB)).toEqual(50);
    expect(calculateRawOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CB)).toEqual(75);
  });

  it('should return raw overall for CM', () => {
    expect(calculateRawOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CM)).toEqual(25);
    expect(calculateRawOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CM)).toEqual(50);
    expect(calculateRawOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CM)).toEqual(75);
  });

  it('should return raw overall for ST', () => {
    expect(calculateRawOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.ST)).toEqual(25);
    expect(calculateRawOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.ST)).toEqual(50);
    expect(calculateRawOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.ST)).toEqual(75);
  });
});

describe('calculateDisplayOverall', () => {
  it('should return display overall for GK', () => {
    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.GK, 1)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.GK, 1)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.GK, 1)).toEqual(75);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.GK, 2)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.GK, 2)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.GK, 2)).toEqual(75);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.GK, 3)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.GK, 3)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.GK, 3)).toEqual(76);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.GK, 4)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.GK, 4)).toEqual(51);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.GK, 4)).toEqual(77);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.GK, 5)).toEqual(26);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.GK, 5)).toEqual(52);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.GK, 5)).toEqual(78);
  });

  it('should return display overall for CB', () => {
    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CB, 1)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CB, 1)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CB, 1)).toEqual(75);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CB, 2)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CB, 2)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CB, 2)).toEqual(75);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CB, 3)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CB, 3)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CB, 3)).toEqual(76);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CB, 4)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CB, 4)).toEqual(51);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CB, 4)).toEqual(77);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CB, 5)).toEqual(26);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CB, 5)).toEqual(52);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CB, 5)).toEqual(78);
  });

  it('should return display overall for CM', () => {
    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CM, 1)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CM, 1)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CM, 1)).toEqual(75);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CM, 2)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CM, 2)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CM, 2)).toEqual(75);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CM, 3)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CM, 3)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CM, 3)).toEqual(76);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CM, 4)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CM, 4)).toEqual(51);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CM, 4)).toEqual(77);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.CM, 5)).toEqual(26);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.CM, 5)).toEqual(52);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.CM, 5)).toEqual(78);
  });

  it('should return display overall for ST', () => {
    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.ST, 1)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.ST, 1)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.ST, 1)).toEqual(75);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.ST, 2)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.ST, 2)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.ST, 2)).toEqual(75);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.ST, 3)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.ST, 3)).toEqual(50);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.ST, 3)).toEqual(76);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.ST, 4)).toEqual(25);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.ST, 4)).toEqual(51);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.ST, 4)).toEqual(77);

    expect(calculateDisplayOverall(fifaRatingAttributes(25), Fifa.Fifa12, Position.ST, 5)).toEqual(26);
    expect(calculateDisplayOverall(fifaRatingAttributes(50), Fifa.Fifa12, Position.ST, 5)).toEqual(52);
    expect(calculateDisplayOverall(fifaRatingAttributes(75), Fifa.Fifa12, Position.ST, 5)).toEqual(78);
  });
});
