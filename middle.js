const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");



const middle = function(array) {
  const emptyArray = [];

  if (array.length <= 2) {
    return emptyArray;
  } else if (isEven(array)) {
    return getTwoMiddleElements(array);
  } else {
    return getMiddleElement(array);
  }
};


// OK -- returns boolean
const isEven = function(input) {
  let output = false;
  input.length % 2 === 0 ? output = true : output = false;
  return output;
};

// OK - returns array
const getMiddleElement = function(input) {
  const middle = [input[Math.round(input.length / 2) - 1]];
  return middle;
};

//OK - returns array
const getTwoMiddleElements = function(input) {
  const middleTwo = [input[Math.round(input.length / 2) - 1],input[Math.round(input.length / 2)]];
  return middleTwo;
};

const test1 = [1,2,3,4,5];
const test2 = ["a","b","c","d"];
assertArraysEqual(middle(test1),[3]);
assertArraysEqual(middle(test2),["b","c"]);
// console.log(middle(test1));
// console.log(middle(test2));