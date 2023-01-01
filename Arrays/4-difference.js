'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const res = [];
  for (const item of array1) {
    const index = array2.indexOf(item);
    if (index === -1) res.push(item);
  }
  return res;
};

module.exports = { difference };
