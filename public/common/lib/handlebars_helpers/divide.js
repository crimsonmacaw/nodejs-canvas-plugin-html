export const divide = {
  name: 'divide',
  fn: (v1, v2) => {
    if (v2 == 0) {
      return Number.POSITIVE_INFINITY;
    }

    return v1 / v2;
  }
};
