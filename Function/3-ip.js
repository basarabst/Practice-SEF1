'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const reducer = (acc, curr) => (acc << 8) + curr;
  return ip.split('.').map((x) => +x).reduce(reducer, 0);
};

module.exports = { ipToInt };
