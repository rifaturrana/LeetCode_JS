//Valid Mountain Array
var validMountainArray = function (arr) {
  let i;

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      continue;
    } else {
      break;
    }
  }
  if (i === 0 || i === arr.length - 1) {
    return false;
  }
  for (let j = arr.length - 1; j > i; j--) {
    if (arr[j] < arr[j - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
console.log(validMountainArray([0, 1, 2, 1, 2]));
validMountainArray([0, 1, 2, 1, 2]);
