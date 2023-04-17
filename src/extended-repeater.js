const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let text = (typeof str != 'string')? String(str) : str;
  let addition = (typeof options.addition != "undefined") ? ((typeof options.addition != 'string') ? String(options.addition) : options.addition) : '';  
  let repeatTimes = (options.repeatTimes) ? options.repeatTimes : 1;
  let separator = (options.separator) ? options.separator : '+';
  let additionRepeatTimes = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  let additionSeparator = (options.additionSeparator) ? options.additionSeparator : '|';

  let middle = (additionRepeatTimes) ? ( (addition+additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length) ) : '';

  let result = (text+middle+separator).repeat(repeatTimes).slice(0, -separator.length);

  return result;
}

module.exports = {
  repeater
};
