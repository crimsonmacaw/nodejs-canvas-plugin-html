export const not = {
  name: 'not',
  fn: (v) => {
    if ('function' == typeof(v)) {
      return !v();
    }
    return !v;
  }
};
