'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SSCS = function () {
  function SSCS(value, config) {
    _classCallCheck(this, SSCS);

    this.__value = value;
    this.__error = config && config.error || '-';

    if (!value || isNaN(value)) {
      return;
    }
  }

  _createClass(SSCS, [{
    key: 'toFixed',
    value: function toFixed(fix) {
      this.__value = parseFloat(this.__value.toFixed(fix));
      return this;
    }
  }, {
    key: 'toFirstNumberFixed',
    value: function toFirstNumberFixed() {
      var fill = function fill(n) {
        var zeros = '';
        for (var i = 0; i < n; i++) {
          zeros += '0';
        }
        return zeros;
      };

      var str = this.__value.toString().split('.')[1] || this.__value.toString().split(',')[1];
      var firstNumIndex = [].concat(_toConsumableArray(str)).findIndex(function (x) {
        return parseInt(x) > 0;
      });
      var rounded = Math.round([[].concat(_toConsumableArray(str)).slice(firstNumIndex)[0], '.'].concat(_toConsumableArray([].concat(_toConsumableArray(str)).slice(firstNumIndex + 1))).join(''));
      this.__value = '0.' + fill(firstNumIndex) + rounded;

      return this;
    }
  }, {
    key: 'round',
    value: function round() {
      this.__value = Math.round(this.__value);
      return this;
    }
  }, {
    key: 'separate',
    value: function separate() {
      this.__value = this.__value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      return this;
    }
  }, {
    key: 'replaceDots',
    value: function replaceDots() {
      this.__value = this.__value.toString().replace('.', ',');
      return this;
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.__value;
    }
  }]);

  return SSCS;
}();

exports.default = function (value, config) {
  return new SSCS(value, config);
};