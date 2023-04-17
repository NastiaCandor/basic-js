const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = !type;
  }
  encrypt(message, keyM) {
    if ((!message)||(!keyM)){
      const e = new Error('Incorrect arguments!');
      throw e;
    }
    let text = message.toUpperCase();
    let key = keyM.toUpperCase();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numAlph = {};
    for (let i=0;i<alphabet.length; i++){
      numAlph[alphabet[i]] = i;
    }
    let code = '';
    let n = 0;
    for (let i=0;i<text.length;i++){
      if (alphabet.includes(text[i])) {
        code += alphabet[(numAlph[text[i]] + numAlph[key[n % key.length]])%alphabet.length];
        n++;
      } else {
        code += text[i];
      }
    }
    if (this.type) {
      code = code.split('').reverse().join('');
    }
    return code;
  }
  decrypt(message, keyM) {
    if ((!message)||(!keyM)){
      const e = new Error('Incorrect arguments!');
      throw e;
    }
    let text = message.toUpperCase();
    let key = keyM.toUpperCase();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numAlph = {};
    for (let i=0;i<alphabet.length; i++){
      numAlph[alphabet[i]] = i;
    }
    let code = '';
    let n = 0;
    for (let i=0;i<text.length;i++){
      if (alphabet.includes(text[i])) {
        code += alphabet[(numAlph[text[i]] - numAlph[key[n % key.length]]+alphabet.length)%alphabet.length];
        n++;
      } else {
        code += text[i];
      }
    }
    if (this.type) {
      code = code.split('').reverse().join('');
    }
    return code;
  }
}

module.exports = {
  VigenereCipheringMachine
};
