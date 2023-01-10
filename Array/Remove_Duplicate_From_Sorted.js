//Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }
  return i + 1;
};
console.log(removeDuplicates([[1, 1, 2]]));
