// The takeUntil function takes an array and a callback as arguments. 
// It iterates through the array and calls the callback on each element until the callback returns a truthy value. 
// It then returns an array containing only the elements in the array that appear before the one that caused the callback to return truthy.
const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) { // if our callback is truthy this will immediately break the loop in whatever iteration it is in
      break;
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;