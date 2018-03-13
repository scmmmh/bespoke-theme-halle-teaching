[![Build Status](https://secure.travis-ci.org/scmmmh/bespoke-theme-halle-teaching.png?branch=master)](https://travis-ci.org/scmmmh/bespoke-theme-halle-teaching)

# bespoke-theme-halle-teaching

Theme for teaching at the Martin-Luther-University Halle-Wittenberg &mdash; [View demo](http://scmmmh.github.io/bespoke-theme-halle-teaching)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/scmmmh/bespoke-theme-halle-teaching/master/dist/bespoke-theme-halle-teaching.min.js
[max]: https://raw.github.com/scmmmh/bespoke-theme-halle-teaching/master/dist/bespoke-theme-halle-teaching.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  halleTeaching = require('bespoke-theme-halle-teaching');

bespoke.from('#presentation', [
  halleTeaching()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.halleTeaching()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-halle-teaching
```

### Bower

```bash
$ bower install bespoke-theme-halle-teaching
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
