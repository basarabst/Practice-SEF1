'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Stanislav Basarab', phone: '+380111222336' },
  { name: 'Adolf Hitler', phone: '+38066774444' },
  { name: 'Mykhailo Zhurovskiy', phone: '+38063334444' }
];

const findPhoneByName = (name) => {
  for (let row of phonebook) {
    if (row.name === name) return row.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
