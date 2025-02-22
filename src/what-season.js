const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if ((date instanceof Date)&&(Object.getOwnPropertyNames(date).length === 0)){
    const seasons = {
      'spring': [2,3,4],
      'summer': [5,6,7],
      'fall': [8,9,10],
      'winter': [11, 0, 1]
    };    
    let result = '';
    const month = date.getMonth();
    for (let key in seasons) {
      if (seasons[key].includes(month)){
        result = key;
      }
    }
    return result;
  } else {
    const e = new Error('Invalid date!');
    throw e;
  }


}

module.exports = {
  getSeason
};
