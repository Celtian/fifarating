import { Fifa, Position, calculateDisplayOverall, calculateRawOverall, fifaRatingAttributes, fifaRatingConfig, fifaRatingPositionConfig } from './src';

const fifaConfigDemo = (): void => {
  console.log('⚽⚽⚽ Fifa rating config demo ⚽⚽⚽');

  const fifa = Fifa.Fifa12;
  const position = Position.GK;
  const defaultOverall = 75;
  const reputation = 5;
  const attributes = fifaRatingAttributes(defaultOverall);

  console.log(fifaRatingConfig(fifa));

  console.log(fifaRatingPositionConfig(fifa, position));

  console.log(calculateRawOverall(attributes, fifa, position));

  console.log(calculateDisplayOverall(attributes, fifa, position, reputation));
};

fifaConfigDemo();
