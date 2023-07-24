import { CalculateUtils } from './calculate';
import { ConfigUtils } from './config';
import { Attribute, Fifa, FifaRatingAttributes, Position } from './interface';
import { RandomUtils } from './random';

export class AttributesUtils {
  public static init(defaultValue: number = 50): FifaRatingAttributes {
    return Object.values(Attribute)
      .map((attr) => ({ [attr]: defaultValue }))
      .reduce((acc, cur) => {
        acc = {
          ...acc,
          ...cur
        };
        return acc;
      }, {}) as FifaRatingAttributes;
  }

  private static generateSelected(
    mean: number,
    stdDev: number,
    attributes: Attribute[] = Object.values(Attribute)
  ): FifaRatingAttributes {
    return attributes
      .map((attr) => ({ [attr]: RandomUtils.gaussianNumberInRange(mean, stdDev) }))
      .reduce((acc, cur) => {
        acc = {
          ...acc,
          ...cur
        };
        return acc;
      }, {}) as FifaRatingAttributes;
  }

  public static setRawOverall(
    attributes: FifaRatingAttributes,
    fifa: Fifa,
    position: Position,
    targetRawOverall: number
  ): FifaRatingAttributes {
    const config = ConfigUtils.fifaPosition(fifa, position);
    const keys = Object.keys(config) as Attribute[];
    let index = 0;
    let calcOverall = CalculateUtils.rawOverall(attributes, fifa, position);
    while (calcOverall !== targetRawOverall) {
      const diff = targetRawOverall - calcOverall;
      const sign = diff >= 0 ? 1 : -1;
      attributes[keys[index]] += sign;
      calcOverall = CalculateUtils.rawOverall(attributes, fifa, position);
      if (Math.abs(keys.length - index) > 1) {
        index++;
      } else {
        index = 0;
      }
    }
    return attributes;
  }

  public static generateRawOverall(fifa: Fifa, position: Position, rawOverall: number): FifaRatingAttributes {
    const config = ConfigUtils.fifaPosition(fifa, position);
    const attrBase = AttributesUtils.generateSelected(0.2 * rawOverall, 7.5);
    const attrUniversal = AttributesUtils.generateSelected(0.7 * rawOverall, 10, [
      Attribute.acceleration,
      Attribute.aggression,
      Attribute.agility,
      Attribute.balance,
      Attribute.jumping,
      Attribute.reactions,
      Attribute.sprintspeed,
      Attribute.stamina,
      Attribute.strength
    ]);
    const attrMain = AttributesUtils.generateSelected(1 * rawOverall, 5, Object.keys(config) as Attribute[]);
    const attrCombined = {
      ...attrBase,
      ...attrUniversal,
      ...attrMain
    };
    return AttributesUtils.setRawOverall(attrCombined, fifa, position, rawOverall);
  }
}
