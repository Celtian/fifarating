import { AttributesUtils, CalculateUtils, Fifa, Position } from '../src';

describe('CalculateUtils.rawOverall', () => {
  it('should return raw overall for GK', () => {
    expect(CalculateUtils.rawOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.GK)).toEqual(25);
    expect(CalculateUtils.rawOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.GK)).toEqual(50);
    expect(CalculateUtils.rawOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.GK)).toEqual(75);
  });

  it('should return raw overall for CB', () => {
    expect(CalculateUtils.rawOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CB)).toEqual(25);
    expect(CalculateUtils.rawOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CB)).toEqual(50);
    expect(CalculateUtils.rawOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CB)).toEqual(75);
  });

  it('should return raw overall for CM', () => {
    expect(CalculateUtils.rawOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CM)).toEqual(25);
    expect(CalculateUtils.rawOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CM)).toEqual(50);
    expect(CalculateUtils.rawOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CM)).toEqual(75);
  });

  it('should return raw overall for ST', () => {
    expect(CalculateUtils.rawOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.ST)).toEqual(25);
    expect(CalculateUtils.rawOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.ST)).toEqual(50);
    expect(CalculateUtils.rawOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.ST)).toEqual(75);
  });
});

describe('CalculateUtils.displayOverall', () => {
  it('should return display overall for GK', () => {
    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.GK, 1)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.GK, 1)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.GK, 1)).toEqual(75);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.GK, 2)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.GK, 2)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.GK, 2)).toEqual(75);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.GK, 3)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.GK, 3)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.GK, 3)).toEqual(76);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.GK, 4)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.GK, 4)).toEqual(51);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.GK, 4)).toEqual(77);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.GK, 5)).toEqual(26);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.GK, 5)).toEqual(52);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.GK, 5)).toEqual(78);
  });

  it('should return display overall for CB', () => {
    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CB, 1)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CB, 1)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CB, 1)).toEqual(75);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CB, 2)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CB, 2)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CB, 2)).toEqual(75);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CB, 3)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CB, 3)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CB, 3)).toEqual(76);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CB, 4)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CB, 4)).toEqual(51);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CB, 4)).toEqual(77);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CB, 5)).toEqual(26);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CB, 5)).toEqual(52);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CB, 5)).toEqual(78);
  });

  it('should return display overall for CM', () => {
    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CM, 1)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CM, 1)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CM, 1)).toEqual(75);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CM, 2)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CM, 2)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CM, 2)).toEqual(75);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CM, 3)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CM, 3)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CM, 3)).toEqual(76);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CM, 4)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CM, 4)).toEqual(51);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CM, 4)).toEqual(77);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.CM, 5)).toEqual(26);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.CM, 5)).toEqual(52);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.CM, 5)).toEqual(78);
  });

  it('should return display overall for ST', () => {
    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.ST, 1)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.ST, 1)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.ST, 1)).toEqual(75);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.ST, 2)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.ST, 2)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.ST, 2)).toEqual(75);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.ST, 3)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.ST, 3)).toEqual(50);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.ST, 3)).toEqual(76);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.ST, 4)).toEqual(25);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.ST, 4)).toEqual(51);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.ST, 4)).toEqual(77);

    expect(CalculateUtils.displayOverall(AttributesUtils.init(25), Fifa.Fifa12, Position.ST, 5)).toEqual(26);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(50), Fifa.Fifa12, Position.ST, 5)).toEqual(52);
    expect(CalculateUtils.displayOverall(AttributesUtils.init(75), Fifa.Fifa12, Position.ST, 5)).toEqual(78);
  });
});
