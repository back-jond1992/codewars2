// Simple Pig Latin

function pigIt(str) {
  const individualWords = str.split(" ");

  return individualWords
    .map((word) => {
      const firstLetter = word.slice(0, 1);
      const restOfWord = word.slice(1);
      return restOfWord + firstLetter + "ay";
    })
    .join(" ");
}
