// TEST FUNCTIONS

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


// TAKEUNTIL FUNCTION
//returns a slice of the array with elements from the beginning
//keeps going until callback returns truthy

const takeUntil = function(array, callback) {
  let newArray = [];

  for (let item of array) {
  
    // console.log(callback(item));

    // while (callback(item) !== true) {
    //   newArray.push(item);
    // }

    if (callback(item) !== true) {
      newArray.push(item);
    } else {
      break
    }
  }
  return newArray;
};

//TEST CASES

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
