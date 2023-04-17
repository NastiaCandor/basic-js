const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    let counter = depth + 1;
    let d = 0;
    arr.map(el => {
      if (Array.isArray(el)) d = Math.max(d, this.calculateDepth(el, counter));
    });
    return Math.max(counter, d);
  }
}

module.exports = {
  DepthCalculator
};
