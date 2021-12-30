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

// Replace With Alphabet Position

function alphabetPosition(text) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const formattedString = text.toLowerCase().split("");

  let result = "";

  for (let i = 0; i < formattedString.length; i++) {
    const lettersRegex = /[a-z]/;
    if (lettersRegex.test(formattedString[i])) {
      result += alphabet[formattedString[i]] + " ";
    }
  }

  return result.trim();
}

// Tribonacci Sequence

function tribonacci(signature, n) {
  let sumOfLastThreeDigits =
    signature[signature.length - 3] + signature[signature.length - 2] + signature[signature.length - 1];
  signature.push(sumOfLastThreeDigits);

  if (signature.length < n) {
    return tribonacci(signature, n);
  }

  return n <= 3 ? signature.slice(0, n) : signature;
}

// Your order,please

function order(words) {
  if (!words) return "";

  const numbers = words
    .split(" ")
    .map((word) => word.match(/\d+/))
    .sort();
  return numbers.map((word) => word.input).join(" ");
}
