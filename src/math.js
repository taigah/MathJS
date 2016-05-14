'use strict';

var MathJS = {
  Vector: require('./vector')
}

// NodeJS
if (module) module.exports = MathJS

// Browser
if (window) {
  window['MathJS'] = MathJS
  for (var i in MathJS) {
    window[i] = MathJS[i]
  }
}
