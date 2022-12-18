'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  const diff = end - start + 1;
  if (diff < 0) return [];
  for (let i = 0; i < diff; i++) {
    const num = start + i;
    if (!(num % 2)) continue;
    arr.push(num);
  }
  return arr;
};

module.exports = { rangeOdd };
