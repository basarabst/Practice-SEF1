'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const set = new Set(array);
  return [...set]; 
};

module.exports = { unique };
