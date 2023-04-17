const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = String(n);
  const max = [];
  for (let i of num) {
    max.push(Number(num.replace(i,'')));
  }
  const res = Math.max(...max);

  return (res);
}

module.exports = {
  deleteDigit
};
