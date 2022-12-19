'use strict';

const sum = (...args) => {
  let res = 0;
  if (!args.length) return 0;
  do {
    const item = args.shift();
    res += item;
  } while (args.length);
  return res;
};

module.exports = { sum };
