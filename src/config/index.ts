import { Fifa, FifaRatingConfig, FifaRatingPositionConfig, Position } from '../interface';
import { default as fifa12 } from './fifa12.json';
import { default as fifa13 } from './fifa13.json';
import { default as fifa14 } from './fifa14.json';
import { default as fifa15 } from './fifa15.json';
import { default as fifa16 } from './fifa16.json';

export class ConfigUtils {
  public static fifa(fifa: Fifa): FifaRatingConfig {
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
  }

  public static fifaPosition(fifa: Fifa, position: Position): FifaRatingPositionConfig {
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
  }
}
