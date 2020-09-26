const letter = "abcdefg";
const letters = letter.split("");

const lettersByTwo = letters.flatMap((letter, index, array) => {
  if (index % 2 != 0) {
    return [];
  }
  let determineConcat = array[index + 1] ? array[index + 1] : "_";
  return letter + determineConcat;
});

console.log("letterByTwoL", lettersByTwo);

function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}

console.log("", solution(letter));
