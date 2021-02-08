const assertEqual = require('./assertEqual');

const tail = (array) => {
  return array.slice(1);
};

// assertEqual(tail([1,2,3,4]), [2,3,4]);

module.exports = tail;
