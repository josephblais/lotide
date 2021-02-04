const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
};

// Returns true if both objects have identical keys w/ identical values
// otherwise returns false
const eqObjects = function(object1, object2) {
  //compare # of keys
  console.log(`Object1 length: ${Object.keys(object1).length}`);
  console.log(`Object2 length: ${Object.keys(object2).length}`);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  //value for each key in object1 === value for same key in object2
  for (const key of object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

};

//TESTS
const ab = { a: "1", b: "2"};
const ba = {b: "2", a: "1"};

// eqObjects(ab,ba); //=>TRUE

const abc = {a: "1", b: "2", c: "3"};
eqObjects(ab, abc);//=>FALSE