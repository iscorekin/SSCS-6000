'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sscs = {
  toFixed: function toFixed(fix) {
    this.__value = parseFloat(this.__value.toFixed(fix));
    return this;
  },
  toFirstNumberFixed: function toFirstNumberFixed() {
    var fill = function fill(n) {
      var zeros = '';
      for (var i = 0; i < n; i++) {
        zeros += '0';
      }
      return zeros;
    };

    var str = this.__value.toString().split('.')[1] || this.__value.toString().split(',')[1];

    if (!str) return this;

    var firstNumIndex = [].concat(_toConsumableArray(str)).findIndex(function (x) {
      return parseInt(x) > 0;
    });
    var rounded = Math.round([[].concat(_toConsumableArray(str)).slice(firstNumIndex)[0], '.'].concat(_toConsumableArray([].concat(_toConsumableArray(str)).slice(firstNumIndex + 1))).join(''));
    this.__value = '0.' + fill(firstNumIndex) + rounded;

    return this;
  },
  round: function round() {
    this.__value = Math.round(this.__value);
    return this;
  },
  separate: function separate() {
    this.__value = this.__value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return this;
  },
  replaceDots: function replaceDots() {
    this.__value = this.__value.toString().replace('.', ',');
    return this;
  },
  valueOf: function valueOf() {
    return this.__value;
  }
};

exports.default = function (value, config) {
  return _extends({
    __value: value && !isNaN(value) ? value : config.error || '0',
    __config: config
  }, sscs);
};