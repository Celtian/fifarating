export class RandomUtils {
  public static generateGaussian(mean: number, stdDev: number): number {
    let u1, u2, v1, v2, s;
    do {
      u1 = Math.random() * 2 - 1;
      u2 = Math.random() * 2 - 1;
      s = u1 * u1 + u2 * u2;
    } while (s >= 1 || s === 0);
    s = Math.sqrt((-2 * Math.log(s)) / s);
    v1 = u1 * s;
    v2 = u2 * s;
    return mean + stdDev * v1;
  }

  public static gaussianNumberInRange(mean: number, stdDev: number): number {
    const result = Math.round(RandomUtils.generateGaussian(mean, stdDev));
    if (result > 99) {
      return 99;
    } else if (result < 1) {
      return 1;
    }
    return result;
  }
}
