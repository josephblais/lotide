// const assertEqual = require("../assertEqual");
// const eqArrays = require("../eqArrays");
// const tail = require("../tail");

// assertEqual(eqArrays(tail([1,2,3,4]),[2,3,4]),true);
// assertEqual(eqArrays(tail([1,2,3,4]),[2,3,4,5]),false);

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns [2,3,4] for [1,2,3,4]', () => {
    assert.deepEqual(tail([1,2,3,4]),[2,3,4]);
  });
  it ("returns ['b','c','d'] for ['a','b','c','d']", () => {
    assert.deepEqual(tail(['a','b','c','d']), ['b','c','d']);
  });
});