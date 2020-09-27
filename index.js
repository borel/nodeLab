const isDivideBy = (number, a, b) => {
  return Number.isInteger(number / a) && Number.isInteger(number / b);
};

const isDivideBy = (number, a, b) => {
  return [a, b].every((n) => Number.isInteger(number / n));
};

console.log("res", isDivideBy(-12, 2, -6));
console.log("res", isDivideBy(45, 1, 6));
console.log("res", isDivideBy(1, 1, "a"));
