class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let str = "";
    strs.forEach((el) => {
      str += `${el.length}#${el}`;
    });
    return str;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let arr = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.slice(i, j));
      arr.push(str.slice(j + 1, j + 1 + length));
      i = j + 1 + length;
    }

    return arr;
  }
}
