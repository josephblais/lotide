const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`❌❌❌ Assertion Failed: ${array1} != ${array2}`);
};

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
console.log(assertArraysEqual(middle(test1),[3]));
console.log(assertArraysEqual(middle(test2),["b","c"]));
// console.log(middle(test1));
// console.log(middle(test2));