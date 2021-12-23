// BIT COUNTING

var countBits = function (n) {
  let counter = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      counter += 1;
    }
    n = Math.floor(n / 2);
  }
  return counter;
};
