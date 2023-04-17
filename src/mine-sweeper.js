const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // let result = matrix.slice(0);
  // let count = 0;
  // for (let i=0;i<3;i++){
  //   for (let j=0; j<3;j++){
  //     for (let k=0;k<3;k++){
  //       if (((i-1+k )> -1)&&((j-1+k) > 0)) {
  //         if (matrix[i-1+k][j-1+k]) count++;
  //       }        
  //     }
  //     result[i][j] = count;
  //     count = 0;
  //   }
  // }
  let result = matrix.map((mat, row) => 
    mat.map((el, col) => {
      let count = 0;
      for (let i = (row - 1 >= 0) ? (row -1) : row; i < row + 2 && i < matrix.length; i++ ) {
        for (let j = col - 1 >= 0? col -1 : col; j < col + 2 && j < mat.length; j++) {
          if (matrix[i][j] === true && !(i === row && j === col)) count +=1;
        }
      }
      return count;
  }));

  return result;
  return result;
}

module.exports = {
  minesweeper
};
