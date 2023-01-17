var sortArrayByParity = function (nums) {
  let i = 0;
  let j = 0;
  let ans = [];

  for (let i = 0; i < nums.length; i++)
    if (nums[i] % 2 === 0) {
      ans[j] = nums[i];
      j++;
    }
  for (let i = 0; i < nums.length; i++)
    if (nums[i] % 2 !== 0) {
      ans[j] = nums[i];
      j++;
    }
  nums = ans;
  return nums;
  //   console.log(nums);
};

sortArrayByParity([3, 1, 2, 4]);
