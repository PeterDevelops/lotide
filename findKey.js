// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key
// for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  for (const user in object) {
    if (callback(object[user])) { // object[user] takes the value of the properties, in this case the values are objects
      return user;
    }
  }
  return undefined;
};

module.exports = findKey;