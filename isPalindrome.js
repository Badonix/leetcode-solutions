const isPalindrome = () => {
  let s = "Was it a car or a cat I saw?";

  let alph = "0123456789abcdefghijklmnopqrstuvwxyz";
  let filtered = "";
  for (let i = 0; i < s.length; i++) {
    if (alph.includes(s[i].toLowerCase())) {
      filtered += s[i].toLowerCase();
    }
  }
  let first = 0;
  let second = filtered.length - 1;
  let isPalindrome = true;
  while (first <= second) {
    if (filtered[first] != filtered[second]) {
      isPalindrome = false;
      break;
    }
    first++;
    second--;
  }
  return isPalindrome;
};
console.log(isPalindrome());
