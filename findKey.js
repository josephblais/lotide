//TEST FUNCTION

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
};

// function takes in 2 arg: object, callback
// returns first object key for which callback = truthy
// else return undefined

const findKey = function (object, callback) {
  for (const key in object) {
    console.log(object[key]);
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2), "noma");