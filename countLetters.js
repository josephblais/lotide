const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
};

const countLetters = function(input) {
  // initialize an object
  let letterCount = {};

  // loop over input
  for (const letter of input) {
    // skip spaces in the input string
    if (letter !== " ") {
      if (letterCount[letter]) {
        // if the letter is alerady in letterCount, increment it
        letterCount[letter] += 1;
      } else {
        // every time there's a new letter, make that a new key in letterCount with value 1
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
};

