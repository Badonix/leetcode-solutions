function groupAnagrams(strs: string[]): string[][] {
  let hashmap = {};
  strs.forEach((el) => {
    let sorted = el.split("").sort().join("");
    if (hashmap[sorted] != undefined) {
      let newArr = hashmap[sorted];
      newArr.push(el);
      hashmap[sorted] = newArr;
    } else {
      hashmap[sorted] = [el];
    }
  });
  let arr: any = [];
  for (let prop in hashmap) {
    arr.push(hashmap[prop]);
  }
  return arr;
}
