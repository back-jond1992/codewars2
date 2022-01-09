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
