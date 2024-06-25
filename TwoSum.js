twoSum = (nums, target) => {
  nums = [3, 4, 5, 6];
  target = 7;

  let hashmap = {};
  let indexes = [];
  for (let i = 0; i < nums.length; i++) {
    if (hashmap[target - nums[i]] != undefined) {
      indexes = [hashmap[target - nums[i]], i];
      break;
    }
    hashmap[nums[i]] = i;
  }
  return indexes;
};

console.log(twoSum());
