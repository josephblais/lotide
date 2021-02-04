
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

// >>>>>>>>>KEEP IN MIND THIS JUST LOGS TRUE OR FALSE; IF YOU WANT THE SAME FUNCTION BUT WITH RETURN VALUE SEE assertObjectsEqual.js<<<<<<<<<


// Returns true if both objects have identical keys w/ identical values
// otherwise returns false
const eqObjects = function(object1, object2) {
  //compare # of keys -- OK
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(false);
    process.exit();
  }

  for (const key in object1) {
    //value for each key in object1 === value for same key in object2 -- OK
    if (object1[key] !== object2[key]) {
      // watch out for array comparison!
      if (Array.isArray(object1[key]) === false) {
        console.log(false);
        process.exit();
      }
    }
    
    //support array value comparisons:
    if (Array.isArray(object1[key])) {
      //make sure identical keys both contain arrays
      if (Array.isArray(object2[key]) === false) {
        console.log(false);
        process.exit();
      }
      // test arrays with eqArrays();
      if (eqArrays(object1[key], object2[key]) === false) {
        console.log(false);
        process.exit();
      }
    }
  }
  console.log(true);
};

//TESTS
const ab = { a: ["1","2"], b: "2"};
const ba = {b: "2", a: ["1","2"]};

eqObjects(ba,ba); //=>TRUE

const abc = {a: "1", b: "2", c: "3"};
eqObjects(ab, abc);//=>FALSE