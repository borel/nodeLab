const solve = (array) => {
  const [min, mid, max] = array.sort((a, b) => a - b);
  return min + mid > max ? max + Math.floor((min + mid - max) / 2) : min + mid;
};

console.log(solve([8, 9, 12]));