'use strict';

const fn = () => {
  const obj1 = { name: 'Petro' };
  let obj2 = { name: 'Spiderman' };
  obj1.name = 'Stasik';
  obj2.name = 'Superman';
  obj2 = { age: 17 };
};

module.exports = { fn };
