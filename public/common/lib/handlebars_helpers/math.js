import { evaluate } from 'tinymath';
import { map, zipObject } from 'lodash';

const isString = val => typeof val === 'string';

const pivotObjectArray = (rows, columns) => {
  const columnNames = columns || Object.keys(rows[0]);
  if (!columnNames.every(isString)) {
    throw new Error('Columns should be an array of strings');
  }
  const columnValues = map(columnNames, name => map(rows, name));
  return zipObject(columnNames, columnValues);
};

export const math = {
  name: 'math',
  fn: (rows, expression, precision) => {
    if (!Array.isArray(rows)) return 'MATH ERROR: first argument must be an array';
    const value = evaluate(expression, pivotObjectArray(rows));
    try {
      return precision ? value.toFixed(precision) : value;
    } catch (e) {
      return value;
    }
  }
};
