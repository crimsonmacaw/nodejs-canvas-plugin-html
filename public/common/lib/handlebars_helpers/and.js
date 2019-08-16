export const and = {
  name: 'and',
  fn: (v1, v2) => {
    return [v1, v2].every(v => {
      if ('function' == typeof(v)) {
        return v() == true;
      }
      return v == true;
    });
  }
};
