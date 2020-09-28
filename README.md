## Super Speedy Cider Squeezer 6000 🍺
"Super Speedy Cider Squeezer 6000" (shortcut SSCS-6000) is a lightweight and fast number formatter for js.

[![npm version](https://badge.fury.io/js/sscs-6000.svg)](https://badge.fury.io/js/sscs-6000)

Feel free to suggest and PR new features.

# Install:

```
npm i sscs-6000
```

# Usage: 

```
  import sscs from 'sscs-6000'
  
  console.log(sscs(0.007123, { error: '-' }).toFirstNumberFixed().valueOf());
  // '0.007'
```

# Available features: 

Be careful! Some functions convert number to string, use them last before `valueOf()`. These functions will be marked with '❗'. 

Function | Description | Example
-------- | ----------- | -------
`toFixed([digit])` | This function formats a number using fixed-point notation. Implemetanion of [Number.prototype.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) | `sscs(1.6785323).toFixed(2).valueOf()` would be `1.67` 
`custom([callback])` | This function provides you custom callback `(value) => value`. So, you can do anything you want with value. | `sscs(1).custom(val => val + 1).valueOf()` would be `2`
`round()` | This function returns the value of a number rounded to the nearest integer. Implemetanion of [Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) | `sscs(1.6785323).round().valueOf()` would be `2`
`toFirstNumberFixed()` | This function formats a number to the first significant decimal place. | `sscs(1.000323).toFirstNumberFixed().valueOf()` would be `1.0003`
`toAnyFloat()` ❗ | This function returns a number with zero fractional part. | `sscs(34).toAnyFloat().valueOf()` would be `'34.0'`
`separate()` ❗ | This function divides the number by spaces by digits. | `sscs(130000000).separate().valueOf()` would be `'130 000 000'`
`replaceDots()` ❗ | This function replace dot in float with сomma | `sscs(13.23).replaceDots().valueOf()` would be `'13,23'`
`valueOf()` | This last function which you should call to get your value. | `sscs(13.23).valueOf()` would be `13.23`


# Config

Config object is a second parameter in main function.

Key | Default | Description
--- | ------- | -----------
error | `'-'` | This returns if no value or value is `NaN`
checkError | `!value || isNaN(value) || value === Number.MIN_VALUE` | Function to check is value correct. 

# Examples 

```
  import sscs from 'sscs-6000'
  
  console.log(sscs(0.007123, { error: '-' }).toFirstNumberFixed().valueOf());
  // '0.007'
  
  console.log(sscs(undefined, { error: '-' }).valueOf());
  // '-'
  
  console.log(sscs(123900.00432, { error: '-' })
    .toFixed(4)
    .toFirstNumberFixed()
    .replaceDots()
    .separate()
    .valueOf()
  );
  // '123 900,004'
```
