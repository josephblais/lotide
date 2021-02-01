const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
};

const tail = (array) => {
  return array.slice(1);
};

console.log(tail([1]));
