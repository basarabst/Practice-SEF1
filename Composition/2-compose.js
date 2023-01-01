'use strict';

const compose = (...fns) => {
  const cb = [];
  const composed = (x) => {
    try {
      return fns.reduceRight((v, f) => f(v), x);
    } catch (err) {
      for (const fn of cb) {
        fn(err);
      }
    }
  }
  composed.on = (name, fn) => {
    if (name === 'error') {
      cb.push(fn);
    }
  }
  return composed;
};

module.exports = { compose };
