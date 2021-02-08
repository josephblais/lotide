const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
};

const tail = (array) => {
  return array.slice(1);
};

assertEqual(tail([1,2,3,4]), [2,3,4]);
