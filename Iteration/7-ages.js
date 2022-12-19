'use strict';

const ages = (persons) => {
  const res = {};
  for (const key in persons) {
    const born = persons[key].born;
    const died = persons[key].died;
    res[key] = died - born;
  }
  return res;
};

module.exports = { ages };
