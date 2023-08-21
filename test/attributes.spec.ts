import { Attribute, AttributesUtils, Fifa, FifaRatingAttributes, Position } from '../src';

describe('AttributesUtils.init', () => {
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
      [Attribute.gkpositioning]: 50,
      [Attribute.gkreflexes]: 50,
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
    const result = AttributesUtils.init();
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
      [Attribute.gkpositioning]: customDefaultValue,
      [Attribute.gkreflexes]: customDefaultValue,
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
    const result = AttributesUtils.init(customDefaultValue);
    expect(result).toEqual(expectedCustomAttributes);
  });
});

describe('AttributesUtils.generateRawOverall', () => {
  it('should return an object', () => {
    const result = AttributesUtils.generateRawOverall(Fifa.Fifa12, Position.GK, 50);
    expect(result).toBeInstanceOf(Object);
  });
});

describe('AttributesUtils.setRawOverall', () => {
  it('should return an object', () => {
    const attributes = AttributesUtils.init(70);
    const result = AttributesUtils.setRawOverall(attributes, Fifa.Fifa12, Position.GK, 75);
    expect(result).toBeInstanceOf(Object);
  });
});
