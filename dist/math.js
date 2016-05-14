"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    'use strict';

    var MathJS = {
      Vector: require('./vector')
    };

    // NodeJS
    if (module) module.exports = MathJS;

    // Browser
    if (window) {
      window['MathJS'] = MathJS;
      for (var i in MathJS) {
        window[i] = MathJS[i];
      }
    }
  }, { "./vector": 2 }], 2: [function (require, module, exports) {
    var Vector = function () {
      function Vector() {
        var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];

        _classCallCheck(this, Vector);

        this.x = x;
        this.y = y;
      }

      /**
       * Get vector's normalize
       * @param {Vector} vector
       * @return {Number}
       */


      _createClass(Vector, [{
        key: "norm",


        /*
          Aliases
         */

        value: function norm() {
          return Vector.norm(this);
        }
      }, {
        key: "normalize",
        value: function normalize() {
          return Vector.normalize(this);
        }
      }, {
        key: "scale",
        value: function scale(_scale2) {
          return Vector.scale(this, _scale2);
        }
      }, {
        key: "add",
        value: function add(vector) {
          return Vector.add(this, vector);
        }
      }, {
        key: "dot",
        value: function dot(vector) {
          return Vector.dot(this, vector);
        }
      }, {
        key: "getCos",
        value: function getCos(vector) {
          return Vector.getCos(this, vector);
        }
      }, {
        key: "getAngle",
        value: function getAngle(vector) {
          return Vector.getAngle(this, vector);
        }
      }], [{
        key: "norm",
        value: function norm(vector) {
          return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        }

        /**
         * Normalize the vector
          * Get vector's normalize
          * @param {Vector} vector
         * @return {Vector}
         */

      }, {
        key: "normalize",
        value: function normalize(vector) {
          var norm = vector.norm();
          return new Vector(vector.x / norm, vector.y / norm);
        }

        /**
         * Scale the vector
         * @param  {Vector} vector
         * @param  {Number} scale
         * @return {Vector}
         */

      }, {
        key: "scale",
        value: function scale(vector, _scale) {
          vector.normalize();
          return new Vector(vector.x * _scale, vector.y * _scale);
        }

        /**
         * Sum two vectors
         * @param {Vector} vector1
         * @param {Vector} vector2
         * @return {Vector}
         */

      }, {
        key: "add",
        value: function add(vector1, vector2) {
          return new Vector(vector1.x + vector2.x, vector1.y + vector2.y);
        }

        /**
         * Get dot product of two vectors
         * @param {Vector} vector1
         * @param {Vector} vector2
         * @return {Number}
         */

      }, {
        key: "dot",
        value: function dot(vector1, vector2) {
          return vector1.x * vector2.x + vector1.y * vector2.y;
        }

        /**
         * Get cosine of the angle of two vectors
         * @param  {Vector} vector1
         * @param  {Vector} vector2
         * @return {Number}
         */

      }, {
        key: "getCos",
        value: function getCos(vector1, vector2) {
          return vector1.dot(vector2) / (vector1.norm() * vector2.norm());
        }

        /**
         * Get the angle of two vectors
         * @param  {Vector} vector1
         * @param  {Vector} vector2
         * @param  {String} unit
         * @return {Number}
         */

      }, {
        key: "getAngle",
        value: function getAngle(vector1, vector2) {
          var unit = arguments.length <= 2 || arguments[2] === undefined ? 'rad' : arguments[2];

          var cos = vector1.getCos(vector2);
          var angle = Math.acos(cos);
          if (unit === 'deg') {
            angle *= 180 / Math.PI;
          }
          return angle;
        }
      }]);

      return Vector;
    }();

    var VectorFactory = function VectorFactory(x, y) {
      return new Vector(x, y);
    };

    VectorFactory.__proto__ = Vector;
    VectorFactory.prototype = Vector.prototype;

    module.exports = VectorFactory;
  }, {}] }, {}, [1]);