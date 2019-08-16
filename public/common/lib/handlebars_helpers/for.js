export const forloop = {
  name: 'for',
  fn: (from, to, incr, block) => {
    var accum = '';
    if (from < to) {
      for(var i = from; i < to; i += incr) {
        accum += block.fn(i);
      }
    } else {
      for(var i = from; i > to; i += incr) {
        accum += block.fn(i);
      }
    }
    return accum;
  }
};
