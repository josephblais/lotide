const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`❌❌❌ Assertion Failed: ${array1} != ${array2}`);
};

// assertArraysEqual([1,2,3,4], [1,2,3,4]);

module.exports = assertArraysEqual;