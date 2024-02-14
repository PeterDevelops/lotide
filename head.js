// An array with only one element should still yield that one element as its head
// An empty array should yield undefined as its head

const head = function (arr) {
    return arr[0];
};

module.exports = head;