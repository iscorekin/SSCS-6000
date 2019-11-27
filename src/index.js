class SSCS {
  constructor(value, config) {
    this.__value = value;
    this.__error = config && config.error || '-'
    
    if (!value || isNaN(value)) {
      return this.__error;
    }
  }

  toFixed(fix) {
    this.__value = parseFloat(this.__value.toFixed(fix));
    return this;
  }

  round() {
    this.__value = Math.round(this.__value);
    return this;
  }

  valueOf() { 
    return this.__value;
  }
}

export default function(value, config) {
  return new SSCS(value, config);
};