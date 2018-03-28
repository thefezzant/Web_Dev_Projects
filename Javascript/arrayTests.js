function printReverse(arr) {
  for (var i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function sumArray(numbArr) {
  var total = 0;
  numbArr.forEach(function(n) {
    result += n;
  });
  return total;
}

function isUniform(arr) {
  var test = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== test) {
      return false;
    }
  }
  return true;
}

function max(arr) {
  var result = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= result) {
      var result = arr[i];
    }
  }
  return result;
}
