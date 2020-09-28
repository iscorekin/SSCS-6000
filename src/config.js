export const defaultErrorCheck = value =>
  !value ||
  isNaN(value) ||
  value > Number.MAX_SAFE_INTEGER ||
  value < Number.MIN_SAFE_INTEGER;

export const defaultConfig = {
  error: '-',
  checkError: defaultErrorCheck
};
