'use strict';

const max = (matrix) => {
  let res = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let i = 0; i < row.length; i++) {
      const item = row[i];
      if (item > res) res = item;
    }
  }
  return res;
};

module.exports = { max };
