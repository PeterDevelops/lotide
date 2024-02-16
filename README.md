# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @peterdinh/lotide`

**Require it:**

`const _ = require('@peterdinh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Takes in two arrays, compares them and console.log an appropriate message to the console.
* `assertEqual(actual, expected)`:  Takes in two values and and print out a message telling us if they match or not.
* `assertObjectsEqual(actual, expected)`: Takes in two objects, compares them and console.log and appropriate message to the console.
* `countLetters(sentence)`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: Takes in a collection of items and returns counts for a specific subset of those items.
* `eqArrays(arr1, arr2)`: Takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(object1, object2)`: Takes in two objects, compares the objects and returns true or false.
* `findKey(object, callback)`: Takes in an object and a callback, scans the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue(object, value)`: Takes in an object and a value, scans the object and return the first key which contains the given value.
* `flatten(arr)`: Takes in a multi-dimentional array and returns a flatten version.
* `head(arr)`: Takes in an array and returns the fist element of that array. 
* `letterPositions(sentence)`: Takes in a sentence and returns all the indices (zero-based positions) in the string where each characcter is found.
* `middle(arr)`: Takes in an array, and returns the middle most element(s) of an array.
* `tail(arr)`: Takes in an array and returns a new array with every element BUT the first one.
* `takeUntil(array, callback)`: Takes in an array and a callback, then returns an array containing only the elements in the array that appear before the one that caused the callback to return truthy.
* `without(source, itemsToRemove)`: Takes in a source array and a itemsToRemove array. Returns a new array with only those elements from source that are not present in the itemsToRemove array.