//Replace Elements with Greatest Element on Right Side

var replaceElements = function (arr) {
  let i;
  for (i = 0; i < arr.length; i++) {
    let max = 0;
    // console.log(i, "---------->i");
    if (i === arr.length - 1) {
      arr[i] = -1;
      break;
    }
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(j, "---------->j");
      if (arr[j] > max) {
        max = arr[j];
        arr[i] = max;
        // console.log(max, "->max");
        // console.log(arr[i]);
        // console.log(arr[j]);
      }
    }
  }
  return arr;
};

replaceElements([400]);
