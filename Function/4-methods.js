'use strict';

const methods = (iface) => {
  const res = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      const length = iface[key].length;
      res.push([key, length]);
    }
  }
  return res;
};

module.exports = { methods };
