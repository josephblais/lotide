const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};



const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`❌❌❌ Assertion Failed: ${array1} != ${array2}`);
};


let test1 = ["11","222","3333","4444"];
let test1Mapped = map(test1, item => item[0]);
console.log(test1Mapped);
let testResult1 = ["1","2","3","4"];
assertArraysEqual(test1Mapped, testResult1);