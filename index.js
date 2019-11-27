'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (value, config) {
  return new SSCS(value, config);
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SSCS = function () {
  function SSCS(value, config) {
    _classCallCheck(this, SSCS);

    this.__value = value;
    this.__error = config && config.error || '-';

    if (!value || isNaN(value)) {
      return this.__error;
    }
  }

  _createClass(SSCS, [{
    key: 'toFixed',
    value: function toFixed(fix) {
      this.__value = parseFloat(this.__value.toFixed(fix));
      return this;
    }
  }, {
    key: 'round',
    value: function round() {
      __value = Math.round(__value);
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

;