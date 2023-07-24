import { ConfigUtils } from '../src/config';
import { Fifa, FifaRatingConfig } from '../src/interface';

const calculateSums = (fifa: FifaRatingConfig): Record<string, number> => {
  return Object.entries(fifa)
    .map(([k, v]) => {
      return { [k]: Object.values(v).reduce((acc, cur) => acc + cur * 100, 0) };
    })
    .reduce((acc, cur) => {
      return {
        ...acc,
        ...cur
      };
    }, {});
};

const isValid = (fifa: FifaRatingConfig) => {
  return Object.values(calculateSums(fifa)).every((i) => i === 100);
};

const main = () => {
  const result = Object.values(Fifa).map((fifa) => ({
    fifa,
    isValid: isValid(ConfigUtils.fifa(fifa))
  }));

  console.table(result);
};

main();
