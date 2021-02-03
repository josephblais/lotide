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

const flatten = function(array) {
  let flattenedArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let subelement of element) {
        flattenedArray.push(subelement);
      }
    } else {
      flattenedArray.push(element);
    }
  }
  console.log(flattenedArray);
};