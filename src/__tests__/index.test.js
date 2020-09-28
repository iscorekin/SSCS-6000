import sscs from '..';

test('fixing float to 2 digits', () => {
  expect(sscs(2.232323232).toFixed(2).valueOf()).toBe(2.23);
  expect(sscs(2.000000999).toFixed(5).valueOf()).toBe(2);
});

test('fixing float to first significant decimal place', () => {
  expect(sscs(0.0000999999999).toFirstNumberFixed().valueOf()).toBe(0.0001);
  expect(sscs(897.003443).toFirstNumberFixed().valueOf()).toBe(897.003);
  expect(sscs(0.00921).toFirstNumberFixed().valueOf()).toBe(0.009);
});

test('rounding float to nearest integer', () => {
  expect(sscs(999.99).round().valueOf()).toBe(1000);
  expect(sscs(999.01).round().valueOf()).toBe(999);
});

test('dividing number by spaces by digits', () => {
  expect(sscs(10000000000).separate().valueOf()).toBe('10 000 000 000');
  expect(sscs(9992.65).separate().valueOf()).toBe('9 992.65');
});

test('returning value from custom callback', () => {
  const customToString = (val) => val.toString();
  expect(sscs(1).custom(customToString).valueOf()).toBe('1');

  const customIncrement = (val) => val + 1;
  expect(sscs(2).custom(customIncrement).valueOf()).toBe(3);
})

test('replacing dot with comma', () => {
  expect(sscs(573.099).replaceDots().valueOf()).toBe('573,099');
})

test('returning initial value', () => {
  expect(sscs(998989).valueOf()).toBe(998989);
})

test('returning default error', () => {
  expect(sscs(undefined).valueOf()).toBe('-');
  expect(sscs('aye').valueOf()).toBe('-');
})

test('returning custom error', () => {
  expect(sscs(undefined, { error: '!ERROR!' }).valueOf()).toBe('!ERROR!');
  expect(sscs('aye', { error: '!ERROR!' }).valueOf()).toBe('!ERROR!');
})

test('checking error by custom function', () => {
  const checkForError = (val) => val % 2 === 0;

  expect(sscs(2, { checkError: checkForError }).valueOf()).toBe('-');
  expect(sscs(3, { checkError: checkForError }).valueOf()).toBe(3);
})

test('returnin float string from int', () => {
  expect(sscs(2).toAnyFloat().valueOf()).toBe('2.0');
})