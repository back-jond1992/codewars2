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

// Create Phone Number

function createPhoneNumber(numbers) {
  let result = "";
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ")");
  numbers.splice(8, 0, "-");
  numbers.splice(5, 0, " ");
  numbers.map((number) => {
    result += number;
  });
  return result;
}
