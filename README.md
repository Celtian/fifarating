<p align="center">
  <a href="https://github.com/Celtian/fifarating" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">fifarating</h1>
</p>

[![npm version](https://badge.fury.io/js/fifarating.svg)](https://badge.fury.io/js/fifarating)
[![Package License](https://img.shields.io/npm/l/fifarating.svg)](https://www.npmjs.com/fifarating)
[![NPM Downloads](https://img.shields.io/npm/dm/fifarating.svg)](https://www.npmjs.com/fifarating)
[![Build & Publish](https://github.com/celtian/fifarating/workflows/Build%20&%20Publish/badge.svg)](https://github.com/celtian/fifarating/actions)
[![codecov](https://codecov.io/gh/Celtian/fifatables/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/fifarating/)
[![stars](https://badgen.net/github/stars/celtian/fifarating)](https://github.com/celtian/fifarating/)
[![forks](https://badgen.net/github/forks/celtian/fifarating)](https://github.com/celtian/fifarating/)
[![HitCount](http://hits.dwyl.com/celtian/fifarating.svg)](http://hits.dwyl.com/celtian/fifarating)

> Utils for Fifa Soccer Game dates

## 🛠️ Install

_Nodejs 12 or higher need to be installed first_

```terminal
npm install fifarating
```

or

```terminal
yarn add fifarating
```

## 🚀 Quick start

_Type this into your ts file._

```typescript
import { AttributesUtils, CalculateUtils, ConfigUtils, Fifa, Position } from 'fifarating';

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
```

## Supported versions of Fifa Soccer

**Fifa 12 - Fifa 23**

## 🪪 License

Copyright &copy; 2023 - 2025 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
