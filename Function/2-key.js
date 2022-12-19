'use strict';

const generateKey = (length, possible) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * length);
    const sym = possible[index];
    key = key + sym;
  }
  return key;
};

module.exports = { generateKey };
