var findNumbers = function (nums) {
  let c = 0;
  let result = 0;
  for (let i = 0; i < nums.length; ++i) {
    while (nums[i] > 0) {
      nums[i] = Math.floor(nums[i] / 10);
      c++;
    }
    if (c % 2 === 0) {
      result++;
    }
    c = 0;
  }
  return result;
};
console.log(findNumbers([555, 901, 482, 1771]));
