class SSCS {
  constructor(value, config) {
    this.__value = value;
    this.__error = config && config.error || '-'
    
    if (!value || isNaN(value)) {
      return;
    }
  }

  toFixed(fix) {
    this.__value = parseFloat(this.__value.toFixed(fix));
    return this;
  }

  toFirstNumberFixed() {    
    const fill = (n) => {
      let zeros = '';
      for(let i = 0; i < n; i++) { zeros += '0' }
      return zeros;
    }

    const str = this.__value.toString().split('.')[1] || this.__value.toString().split(',')[1];
    const firstNumIndex = [...str].findIndex(x => parseInt(x) > 0);
    const rounded = (Math.round([[...str].slice(firstNumIndex)[0], '.', ...[...str].slice(firstNumIndex + 1)].join('')));
    this.__value = `0.${fill(firstNumIndex)}${rounded}`;
    
    return this;
  }

  round() {
    this.__value = Math.round(this.__value);
    return this;
  }

  separate() {
    this.__value = this.__value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return this;
  }

  replaceDots() {
    this.__value = this.__value.toString().replace('.', ',');
    return this;
  }

  valueOf() { 
    return this.__value;
  }
}

export default (value, config) => new SSCS(value, config);