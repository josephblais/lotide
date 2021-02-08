const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
const tail = require("../tail");

assertEqual(eqArrays(tail([1,2,3,4]),[2,3,4]),true);
assertEqual(eqArrays(tail([1,2,3,4]),[2,3,4,5]),false);