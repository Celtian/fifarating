import { ConfigUtils, Fifa, Position } from '../src';

describe('ConfigUtils.fifa', () => {
  it('returns correct config for Fifa 12', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa12)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 13', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa13)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 14', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa14)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 15', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa15)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 16', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa16)).toBeInstanceOf(Object);
  });
});

describe('ConfigUtils.fifaPosition', () => {
  it('returns correct config for Fifa 12 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa12, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 13 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa13, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 14 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa14, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 15 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa15, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 16 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa16, Position.LW)).toBeInstanceOf(Object);
  });
});
