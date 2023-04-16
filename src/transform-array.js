const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    const e = new Error("\'arr\' parameter must be an instance of the Array!");
    throw e;
  }
  if (arr.length === 0) {
    return arr;
  }
  let del = 0;
  let rep = 0;
  let newArr = [];
  for (let i = 0; i< arr.length; i++){
    if (arr[i] === '--discard-next') {
      if (arr[i+1]){
        i++;
        del = arr[i+1];
      }   
    } else if (arr[i] === '--discard-prev') {
      if (arr[i-1]){
        if (!del){
          newArr.pop();
        }
      }
    } else if (arr[i] === '--double-next') {
      if (arr[i+1]){
        newArr.push(arr[i+1]);
      }      
    } else if (arr[i] === '--double-prev') {
      if (arr[i-1]){
        if (!del) {
          newArr.push(arr[i-1]);
          del = 0;
        }
        
      }       
    } else {
      newArr.push(arr[i]);
      del = 0;
    }
  }
  
  return newArr;
}

module.exports = {
  transform
};
