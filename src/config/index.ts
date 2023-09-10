import { Fifa, FifaRatingConfig, FifaRatingPositionConfig, Position } from '../interface';
import { default as fifa12 } from './fifa12.json';
import { default as fifa13 } from './fifa13.json';
import { default as fifa14 } from './fifa14.json';
import { default as fifa15 } from './fifa15.json';
import { default as fifa16 } from './fifa16.json';
import { default as fifa17 } from './fifa17.json';
import { default as fifa18 } from './fifa18.json';
import { default as fifa19 } from './fifa19.json';
import { default as fifa20 } from './fifa20.json';
import { default as fifa21 } from './fifa21.json';
import { default as fifa22 } from './fifa22.json';
import { default as fifa23 } from './fifa23.json';

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
      case Fifa.Fifa17:
        return fifa17;
      case Fifa.Fifa18:
        return fifa18;
      case Fifa.Fifa19:
        return fifa19;
      case Fifa.Fifa20:
        return fifa20;
      case Fifa.Fifa21:
        return fifa21;
      case Fifa.Fifa22:
        return fifa22;
      case Fifa.Fifa23:
        return fifa23;
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
      case Fifa.Fifa17:
        return fifa17[position];
      case Fifa.Fifa18:
        return fifa18[position];
      case Fifa.Fifa19:
        return fifa19[position];
      case Fifa.Fifa20:
        return fifa20[position];
      case Fifa.Fifa21:
        return fifa21[position];
      case Fifa.Fifa22:
        return fifa22[position];
      case Fifa.Fifa23:
        return fifa23[position];
      default:
        return undefined;
    }
  }
}
