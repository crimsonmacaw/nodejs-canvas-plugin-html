export const round = {
  name: 'round',
  fn: (v1, digits) => {
    digits = digits == undefined ? 0 : digits;
    return Math.round(v1, digits);
  }
};
