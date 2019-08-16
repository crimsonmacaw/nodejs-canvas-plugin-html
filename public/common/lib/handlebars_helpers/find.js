export const find = {
  name: 'find',
  fn: (rows, prop, value, options) => {
    if (!Array.isArray(rows)) return 'FIND ERROR: first argument must be an array';

    let data = options.data;
    let fn = options.fn;

    var idx = -1;
    rows.some((el, index) => {
      if (el[prop] == value) {
        idx = index;
        return true;
      }

      return false;
    });

    if (idx == -1) {
    	return options.inverse(this);
    }

    return fn(rows[idx]);
  }
};
