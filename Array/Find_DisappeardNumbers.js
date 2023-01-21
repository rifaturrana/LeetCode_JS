var findDisappearedNumbers = function (nums) {
  let ans = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      ans.push(i);
    }
  }
  return ans;
};
findDisappearedNumbers([1, 1]);
