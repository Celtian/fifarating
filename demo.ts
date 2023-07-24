import { AttributesUtils, CalculateUtils, ConfigUtils, Fifa, Position } from './src';

const fifaConfigDemo = (): void => {
  console.log('⚽⚽⚽ Fifa rating config demo ⚽⚽⚽');

  const fifa = Fifa.Fifa12;
  const position = Position.GK;
  const defaultOverall = 75;
  const reputation = 5;
  const attributes = AttributesUtils.init(defaultOverall);

  console.log(ConfigUtils.fifa(fifa));

  console.log(ConfigUtils.fifaPosition(fifa, position));

  console.log(CalculateUtils.rawOverall(attributes, fifa, position));

  console.log(CalculateUtils.displayOverall(attributes, fifa, position, reputation));

  console.log(AttributesUtils.init(defaultOverall));

  console.log(AttributesUtils.setRawOverall(AttributesUtils.init(defaultOverall), fifa, position, defaultOverall + 5));

  console.log(AttributesUtils.generateRawOverall(fifa, position, defaultOverall));
};

fifaConfigDemo();
