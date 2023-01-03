'use strict';

const contract = (fn, ...types) => {
  return (...args) => {
    for (let i = 0; i < args.length; i++) {
      const type = types[i+1];
      if (typeof args[i] !== type.name.toLowerCase()) throw new TypeError;
    }
    const res = fn(...args);
    const resType = types[types.length-1];
    if (typeof res !== resType.name.toLowerCase()) throw new TypeError;
    return res;
  }
};

module.exports = { contract };
