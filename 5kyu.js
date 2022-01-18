// Simple Pig Latin

function pigIt(str) {
  const individualWords = str.split(" ");

  return individualWords
    .map((word) => {
      if (word.match(/^[a-zA-Z]+$/g)) {
        const firstLetter = word.slice(0, 1);
        const restOfWord = word.slice(1);
        return restOfWord + firstLetter + "ay";
      } else {
        return word;
      }
    })
    .join(" ");
}

// Moving Zeros To The End

var moveZeros = function (arr) {
  let nonZeros = [];
  let zeros = [];
  arr.map((char) => (char === 0 ? zeros.push(char) : nonZeros.push(char)));
  return nonZeros.concat(zeros);
};

// Valid Parentheses

function validParentheses(parens) {
  const parenthesesArray = parens.split("");
  let left = 0;
  let right = 0;
  let validOrder = true;
  parenthesesArray.map((paren) => {
    if (paren === "(") {
      left += 1;
    }
    if (paren === ")") {
      right += 1;
    }
    if (right > left) {
      validOrder = false;
    }
  });
  return parens === "" ||
    (left === right &&
      parenthesesArray[0] === "(" &&
      parenthesesArray[parenthesesArray.length - 1] === ")" &&
      validOrder === true)
    ? true
    : false;
}

// Human Readable Time

function humanReadable(int) {
  let hours = Math.floor(int / 3600);
  let minutes = Math.floor((int % 3600) / 60);
  let seconds = Math.floor((int % 3600) % 60);

  let formattedHours = hours < 10 ? "0" + hours : hours;
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}

// Directions Reduction

function dirReduc(arr) {
  const NS = "NORTH SOUTH";
  const SN = "SOUTH NORTH";
  const EW = "EAST WEST";
  const WE = "WEST EAST";

  let counter = 0;

  for (let i = 1; i < arr.length; i++) {
    if (
      arr[i - 1] + " " + arr[i] === NS ||
      arr[i - 1] + " " + arr[i] === SN ||
      arr[i - 1] + " " + arr[i] === EW ||
      arr[i - 1] + " " + arr[i] === WE
    ) {
      counter += 1;
      arr.splice(i - 1, 2);
    }
  }

  return counter > 0 ? dirReduc(arr) : arr;
}

// RGB To Hex Conversion

function rgb(r, g, b) {
  const rgb = [r, g, b];

  const hexCode = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  const converter = (number) => {
    if (number <= 0) {
      return "00";
    } else if (number > 255) {
      return "FF";
    } else {
      const firstValue = Math.floor(number / 16);
      const decimal = number / 16 - firstValue;
      const secondValue = decimal * 16;

      let firstHex = hexCode[firstValue];
      let secondHex = hexCode[secondValue];

      return firstHex.toString() + secondHex.toString();
    }
  };

  return rgb.map((number) => converter(number)).join("");
}

// Calculating with Functions

function zero(num) {
  if (Array.isArray(num)) {
    num.push(0);
    return Math.floor(eval(num[2] + num[1] + num[0]));
  } else {
    return [0];
  }
}

function one(num) {
  if (Array.isArray(num)) {
    num.push(1);
    return Math.floor(eval(num[2] + num[1] + num[0]));
  } else {
    return [1];
  }
}
function two(num) {
  if (Array.isArray(num)) {
    num.push(2);
    return Math.floor(eval(num[2] + num[1] + num[0]));
  } else {
    return [2];
  }
}
function three(num) {
  if (Array.isArray(num)) {
    num.push(3);
    return Math.floor(eval(num[2] + num[1] + num[0]));
  } else {
    return [3];
  }
}
function four(num) {
  if (Array.isArray(num)) {
    num.push(4);
    return Math.floor(eval(num[2] + num[1] + num[0]));
  } else {
    return [4];
  }
}
function five(num) {
  if (Array.isArray(num)) {
    num.push("5");
    return Math.floor(eval(num[2] + num[1] + num[0]));
  } else {
    return ["5"];
  }
}
function six(num) {
  if (Array.isArray(num)) {
    num.push(6);
    return Math.floor(eval(num[2] + num[1] + num[0]));
  } else {
    return [6];
  }
}
function seven(num) {
  if (Array.isArray(num)) {
    num.push("7");
    return Math.floor(eval(num[2] + num[1] + num[0]));
  } else {
    return ["7"];
  }
}
function eight(num) {
  if (Array.isArray(num)) {
    num.push(8);
    return Math.floor(eval(num[2] + num[1] + num[0]));
  } else {
    return [8];
  }
}
function nine(num) {
  if (Array.isArray(num)) {
    num.push(9);
    return Math.floor(eval(num[2] + num[1] + num[0]));
  } else {
    return [9];
  }
}

function plus(num) {
  num.push("+");
  return num;
}
function minus(num) {
  num.push("-");
  return num;
}
function times(num) {
  num.push("*");
  return num;
}
function dividedBy(num) {
  num.push("/");
  return num;
}
