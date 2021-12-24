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

// Take a Ten Minute Walk

function isValidWalk(walk) {
  const directions = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };

  for (let i = 0; i < walk.length; i++) {
    if (directions[walk[i]]) {
      directions[walk[i]] += 1;
    } else {
      directions[walk[i]] = 1;
    }
  }

  if (walk.length === 10 && directions.n === directions.s && directions.e === directions.w) {
    return true;
  } else {
    return false;
  }
}
