var twoSum = function (nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        ans.push(i, j);
      }
    }
  }
  return ans;
};
console.log(twoSum([2, 7, 11, 3], 9));
// 2 7 11 3
//i = 0
//j =1

// hate coding................
// Thank you!
