
const lettersByTwo = (letters) => {
    return letters.split("").flatMap((letter, index, array) => {
        if (index % 2 != 0) {
            return [];
        }
        let determineConcat = array[index + 1] ? array[index + 1] : "_";
        return letter + determineConcat;
    });
};

const solution = (s) => {
    return (s + "_").match(/.{2}/g) || [];
};

const letter = "abcdefg";
console.log(lettersByTwo(letter));
console.log(solution(letter));
