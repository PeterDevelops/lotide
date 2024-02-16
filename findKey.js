const findKey = function(object, callback) {
  for (const user in object) {
    if (callback(object[user])) {
      return user;
    }
  }
  return undefined;
};

module.exports = findKey;