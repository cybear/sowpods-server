module.exports = class Filters {
  constructor (dictionary) {
    this.dictionary = dictionary;
  }
  isPalindrome (w) {
    var truncHalf = Math.floor(w.length / 2),
      wordEndOffset = w.length - 1;
    for(var i = 0; i < truncHalf; i++) {
      let c1 = w[i], c2 = w[wordEndOffset -i];
      if(c1 !== c2) return false;
    }
    return true;
  }
  palindromes () {
    return this.dictionary.filter(this.isPalindrome);
  }
  length (from, to) {
    const isBetween = w => w.length >= from && w.length <= to;
    return this.dictionary.filter(isBetween);
  }
  onlyLetters (letters) {
    const re = new RegExp(`^[${letters}]*$`);
    return this.dictionary.filter(w => re.test(w));
  }
  prefix (str) {
    const re = new RegExp(`^${str}`);
    return this.dictionary.filter(w => re.test(w));
  }
  suffix (str) {
    const re = new RegExp(`${str}$`);
    return this.dictionary.filter(w => re.test(w));
  }
  interfix (str) {
    const re = new RegExp(`${str}`);
    return this.dictionary.filter(w => re.test(w));
  }
  prefixAndSuffix(prefix, suffix) {
    const re = new RegExp(`^${prefix}.*${suffix}$`);
    return this.dictionary.filter(w => re.test(w));
  }
}
