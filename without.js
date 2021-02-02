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

const without = function(source, itemsToRemove) {
  let filteredArray = source.filter(function(x) {
    return itemsToRemove.indexOf(x) < 0;
  });
  console.log(filteredArray);
};
