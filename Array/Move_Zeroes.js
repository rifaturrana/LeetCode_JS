var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;
  let c = 0;
  while (i < nums.length) {
    // console.log(i, "---->i");
    // console.log(j, "---->j");
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    } else {
      c++;
    }
    i++;
  }
  while (c > 0) {
    nums[nums.length - c] = 0;
    c--;
  }
  return nums;
};

moveZeroes([0]);
