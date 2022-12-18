'use strict';

const countTypesInArray = (arr) => {
  const count = {};
  for (const value of arr) {
    const type = typeof value;
    const num = count[type] || 0;
    count[type] = num + 1;
  }
  return count;
};

module.exports = { countTypesInArray };
