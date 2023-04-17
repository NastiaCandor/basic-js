const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let obj1 = {};
  let obj2 = {};
  let str1 = s1.split('');
  let str2 = s2.split('');
  for (let i=0;i<str1.length; i++){
    (!obj1[str1[i]]) ? obj1[str1[i]] = 1 : obj1[str1[i]]++;
  }
  for (let i=0;i<str2.length; i++){
    (!obj2[str2[i]]) ? obj2[str2[i]] = 1 : obj2[str2[i]]++;
  }
  let result = 0;
  for (let [key, val] of Object.entries(obj1)) {
    if (obj2[key]) {
      result+=Math.min(val, obj2[key]);
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
