const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  matrix.forEach((row, rowInd) => {
    row.forEach((el, ind) => {
      for (let i = rowInd-1; i >= 0; i--){
        if (matrix[i][ind] === 0) return false;
      }
      result+=el;
    });
  });
  return result;
}

module.exports = {
  getMatrixElementsSum
};
