'use strict';

const square = (a) => a*a;

const cube = (a) => a*a*a;

const average = (a, b) => (a + b) * 0.5;

const calculate = () => {
  const res = [];
  for (let i = 0; i < 10; i++) {
    const calc = average(cube(i), square(i));
    res.push(calc);
  }
  return res;
};

module.exports = { square, cube, average, calculate };
