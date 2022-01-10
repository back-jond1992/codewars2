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
