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

  it('returns correct config for Fifa 17', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa17)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 18', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa18)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 19', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa19)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 20', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa20)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 21', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa21)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 22', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa22)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 23', () => {
    expect(ConfigUtils.fifa(Fifa.Fifa23)).toBeInstanceOf(Object);
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

  it('returns correct config for Fifa 17 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa17, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 18 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa18, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 19 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa19, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 20 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa20, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 21 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa21, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 22 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa22, Position.LW)).toBeInstanceOf(Object);
  });

  it('returns correct config for Fifa 23 for specific position', () => {
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.GK)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.SW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.RWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.RB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.RCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.CB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.LCB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.LB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.LWB)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.RDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.CDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.LDM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.RM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.RCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.CM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.LCM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.LM)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.RF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.CF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.LF)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.RW)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.RS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.ST)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.LS)).toBeInstanceOf(Object);
    expect(ConfigUtils.fifaPosition(Fifa.Fifa23, Position.LW)).toBeInstanceOf(Object);
  });
});
