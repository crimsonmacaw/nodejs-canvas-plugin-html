export const or = {
  name: 'or',
  fn: (v1, v2) => {
    return [v1, v2].some(v => {
      if ('function' == typeof(v)) {
        return v() == true;
      }
      return v == true;
    });
  }
};
