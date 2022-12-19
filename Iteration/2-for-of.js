'use strict';

const sum = (...args) => {
  let res = 0;
  for (const item of args) {
    res += item;
  }
  return res;
};

module.exports = { sum };
