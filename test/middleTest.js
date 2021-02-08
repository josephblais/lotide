const assert = require('chai').assert;
const middle = require('../middle');


// const eqArrays = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");


// const test1 = [1,2,3,4,5];
// const test2 = ["a","b","c","d"];
// assertArraysEqual(middle(test1),[3]);
// assertArraysEqual(middle(test2),["b","c"]);
// console.log(middle(test1));
// console.log(middle(test2));

describe('#middle', () => {
  it('returns [3] for [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it('returns [3,4] for [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });

  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
});