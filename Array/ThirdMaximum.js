var thirdMax = function (nums) {
  const ans = nums
    .filter((v, i) => nums.indexOf(v) === i)
    .sort((a, b) => a - b);

  return ans.length >= 3 ? ans[ans.length - 3] : ans[ans.length - 1];
};

console.log(thirdMax([2, 2, 3, 1]));
