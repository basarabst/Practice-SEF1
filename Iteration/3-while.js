'use strict';

const sum = (...args) => {
  let res = 0;
  while (args.length) {
    const item = args.shift();
    res += item;
  }
  return res;
};

module.exports = { sum };
