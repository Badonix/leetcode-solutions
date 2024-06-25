const topKFrequent = () => {
  let nums = [123, 123, 123, 423, 423];
  let k = 2;
  let bucket = [];
  let hashmap = {};
  nums.forEach((el) => {
    hashmap[el] = hashmap[el] != undefined ? hashmap[el] + 1 : 1;
  });
  for (let property in hashmap) {
    if (Array.isArray(bucket[hashmap[property]])) {
      bucket[hashmap[property]].push(property);
    } else {
      bucket[hashmap[property]] = [property];
    }
  }
  let arr = [];
  bucket = bucket.flat();
  while (k > 0) {
    if (bucket[bucket.length - 1] != undefined) {
      k--;
      arr.push(bucket[bucket.length - 1]);
      bucket.length -= 1;
    }
  }
  return arr;
};

console.log(topKFrequent());
