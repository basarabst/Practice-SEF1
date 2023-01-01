'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('Arg is not a function');
    }
  }
  return (x) => fns.reduce((v, f) => f(v), x);
};

module.exports = { pipe };
