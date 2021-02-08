# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @josephblais/lotide`

**Require it:**

`const _ = require('@josephblais/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns first element of an array
* `tail(...)`: returns an array minus the first element
* `middle(...)`: returns the middle element of an array. If array length is even, returns the two middle elements. If array contains two or fewer elements, returns an empty array.
* `eqArrays(...)`: returns a boolean value whether two passed arrays are equal
* `assertEqual(...)`: logs an assertion whether two passed values are equal
* `assertArraysEqual(...)`: logs an assertion whether two passed arrays are equal

