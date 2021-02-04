const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
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


// Returns true if both objects have identical keys w/ identical values
// otherwise returns false
const eqObjects = function(object1, object2) {
  //compare # of keys -- OK
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    //value for each key in object1 === value for same key in object2 -- OK
    if (object1[key] !== object2[key]) {
      // watch out for array comparison!
      if (Array.isArray(object1[key]) === false) {
        return false;
      }
    }
    
    //support array value comparisons:
    if (Array.isArray(object1[key])) {
      //make sure identical keys both contain arrays
      if (Array.isArray(object2[key]) === false) {
        return false;
      }
      // test arrays with eqArrays();
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    }
  }
  return true;
};

//FUNCTION IMPEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // console.log(`Actual:${actual}\nExpected:${expected}`);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: Actual (${actual}) === Expected (${expected})`);
  } else {
    console.log(`❌❌❌ Assertion Failed: Actual (${actual}) != Expected (${expected})`);
  }
};





//TESTS
const ab = { a: ["1","2"], b: "2"};
const ba = {b: "2", a: ["1","2"]};
console.log(assertObjectsEqual(eqObjects(ab,ba),true)); //=>TRUE

// console.log(eqObjects(ab,ba)); //=>TRUE

const abc = {a: "1", b: "2", c: "3"};
console.log(assertObjectsEqual(eqObjects(ab,abc),true)); //=>FALSE`
// console.log(eqObjects(ab, abc));//=>FALSE
