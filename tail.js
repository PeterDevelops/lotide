// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail

const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;