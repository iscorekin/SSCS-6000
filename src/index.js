const sscs = {
  toFixed(fix) {
    if (!this.__hasError) {
      this.__value = parseFloat(this.__value.toFixed(fix));
    }

    return this;
  },

  toFirstNumberFixed() {
    if (!this.__hasError) {    
      const fill = (n) => {
        let zeros = '';
        for(let i = 0; i < n; i++) { zeros += '0' }
        return zeros;
      }

      const str = this.__value.toString().split('.')[1] || this.__value.toString().split(',')[1];
      
      if (!str) return this;

      const firstNumIndex = [...str].findIndex(x => parseInt(x) > 0);
      this.__value = `0.${fill(firstNumIndex)}${[...str][firstNumIndex]}`;
    }

    return this;
  },

  round() {
    if (!this.__hasError)
      this.__value = Math.round(this.__value);
    
    return this;
  },

  separate() {
    if (!this.__hasError) 
      this.__value = this.__value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    
    return this;
  },

  replaceDots() {
    if(!this.__hasError)
      this.__value = this.__value.toString().replace('.', ',');

    return this;
  },

  valueOf() { 
    return !this.__hasError ? this.__value : this.__config.error;
  },
}

export default (value, config) => {
  const hasError = !value || isNaN(value) || value === Number.MIN_VALUE;

  const conf = {
    error: '-',
    ...config,
  };
  
  return {
    __hasError: hasError,
    __value: !hasError ? value : conf.error,
    __config: config,
    ...sscs
  }
};