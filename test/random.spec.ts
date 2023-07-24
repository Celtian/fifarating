import { RandomUtils } from '../src';

describe('RandomUtils.generateGaussian', () => {
  it('should return number', () => {
    const result = RandomUtils.generateGaussian(50, 5);
    expect(result).not.toBeNaN();
  });
});

describe('RandomUtils.gaussianNumberInRange', () => {
  it('should return number', () => {
    const result = RandomUtils.gaussianNumberInRange(50, 5);
    expect(result).not.toBeNaN();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(99);
  });
});
