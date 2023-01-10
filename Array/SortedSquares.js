var sortedSquares = function (nums) {
  const array = nums.map((element) => element * element).sort((a, b) => a - b);

  return array;
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));
