'use strict';

const range = (start, end) => {
  const arr = [];
  const diff = end - start + 1;
  if (diff < 0) return [];
  for (let i = 0; i < diff; i++) {
    const num = start + i;
    arr.push(num);
  }
  return arr;
};

module.exports = { range };
