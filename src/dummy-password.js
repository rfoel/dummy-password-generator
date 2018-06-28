export default class DummyPassword {
  constructor() {
    this.LOWER = 'abcdefghijklmnopqrstuvwxyz';
    this.UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.DIGITS = '1234567890';
    this.SYMBOLS = '!#%&?+*_.,:;';
    this.MAX_LENGTH = 50;
    this.MIN_LENGTH = 1;
  }

  create(length, characters) {
    var _length = this.adjustLengthWithinLimits(length);
    var _characters = this.secureCharacterCombination(characters);

    return this.shufflePassword(this.assemblePassword(_characters, _length));
  }

  adjustLengthWithinLimits(length) {
    if (!length || length < this.minLength) return this.minLength;
    else if (length > this.maxLength) return this.maxLength;
    else return length;
  }

  secureCharacterCombination(characters) {
    var defaultCharacters = this.LOWER + this.UPPER + this.DIGITS;

    if (!characters || this.trim(characters) == '') return defaultCharacters;
    else if (!this.containsAtLeast(characters, [this.LOWER, this.UPPER, this.DIGITS, this.SYMBOLS]))
      return defaultCharacters;
    else return characters;
  }

  assemblePassword(characters, length) {
    var randMax = this.DIGITS.length;
    var randMin = randMax - 4;
    var index = this.random(0, characters.length - 1);
    var password = '';

    for (var i = 0; i < length; i++) {
      var jump = this.random(randMin, randMax);
      index = index + jump > characters.length - 1 ? this.random(0, characters.length - 1) : index + jump;
      password += characters[index];
    }

    return password;
  }

  shufflePassword(password) {
    return password
      .split('')
      .sort(() => {
        return 0.5 - Math.random();
      })
      .join('');
  }

  containsAtLeast(string, strings) {
    for (var i = 0; i < strings.length; i++) {
      if (string.indexOf(strings[i]) != -1) return true;
    }
    return false;
  }

  random(min, max) {
    return Math.floor(Math.random() * max + min);
  }

  trim(s) {
    if (typeof String.prototype.trim !== 'function') return s.replace(/^\s+|\s+$/g, '');
    else return s.trim();
  }
}
