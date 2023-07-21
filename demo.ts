import { Fifa, Position, fifaRatingConfig, fifaRatingPositionConfig } from './src';

const fifaConfigDemo = (): void => {
  console.log('⚽⚽⚽ Fifa rating config demo ⚽⚽⚽');

  console.log(fifaRatingConfig(Fifa.Fifa12));

  console.log(fifaRatingPositionConfig(Fifa.Fifa12, Position.GK));
};

fifaConfigDemo();
