'use strict';

const phonebook = {
  Marcus: '+380445554433',
  Stanislav: '+380111222336',
  Adolf: '+38066774444',
  Mykhailo: '+38063334444'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
