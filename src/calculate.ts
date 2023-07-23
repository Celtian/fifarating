import { ConfigUtils } from './config';
import { Attribute, Fifa, FifaRatingAttributes, Position } from './interface';

export class CalculateUtils {
  public static rawOverall(attributes: FifaRatingAttributes, fifa: Fifa, position: Position): number {
    const positionConfig = ConfigUtils.fifaPosition(fifa, position);
    const rawOverall = Object.entries(positionConfig).reduce((acc, [k, v]) => {
      const key = k as Attribute;
      const value = v;
      return acc + attributes[key] * value;
    }, 0);
    return Math.min(Math.round(rawOverall), 99);
  }

  // valid for FIFA 12 - 16 (rest should be checked)
  public static displayOverall(
    attributes: FifaRatingAttributes,
    fifa: Fifa,
    position: Position,
    reputation: number
  ): number {
    const rawOverall = CalculateUtils.rawOverall(attributes, fifa, position);
    if (reputation === 3) {
      if (rawOverall > 50) {
        return Math.min(rawOverall + 1, 99);
      }
    } else if (reputation === 4) {
      if (rawOverall >= 67) {
        return Math.min(rawOverall + 2, 99);
      }
      if (rawOverall >= 33) {
        return Math.min(rawOverall + 1, 99);
      }
    } else if (reputation === 5) {
      if (rawOverall >= 75) {
        return Math.min(rawOverall + 3, 99);
      }
      if (rawOverall >= 50) {
        return Math.min(rawOverall + 2, 99);
      }
      if (rawOverall >= 25) {
        return Math.min(rawOverall + 1, 99);
      }
    }
    return rawOverall;
  }
}
