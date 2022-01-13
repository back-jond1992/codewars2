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

function dirReduc(arr){
  const NS = 'NORTH SOUTH'
  const SN = 'SOUTH NORTH'
  const EW = 'EAST WEST'
  const WE = 'WEST EAST'
  
  let counter = 0
  
  for(let i = 1; i < arr.length; i++) {
    if(arr[i - 1] + ' ' + arr[i] === NS || arr[i - 1] + ' ' + arr[i] === SN || arr[i - 1] + ' ' + arr[i] === EW || arr[i - 1] + ' ' + arr[i] === WE) {
      counter += 1
      arr.splice(i - 1, 2)
    }
  }
  
  return counter > 0 ? dirReduc(arr) : arr;