function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function isEvenSimple(num) {
  return (num % 2 === 0);
}

function factorial(num) {
  var i = Number(num);
  var ans = 1;
  if (i === 0) {
    return 1;
  }
  for (i; i > 0; i--) {
    ans *= i;
  }
  return ans;
}

function kebabToSnake(str) {
  if (str.indexOf("-") < 0) {
    return str;
  }
  var newStr = str.replace("-", "_");
  return kebabToSnake(newStr);
}

function sing() {
  console.log("Twinkle twinkle...");
  console.log("how I wonder");
}
