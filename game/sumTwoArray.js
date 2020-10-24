const addArrays = (array1, array2) => {
  let negative = false;
  const array = [array1, array2]
    .map((array) =>
      array.reduce(
        (accumulateur, valeurCourante) =>
          accumulateur + new String(valeurCourante),
        []
      )
    )
    .reduce((accumulateur, valeurCourante) => {
      const res = new Number(accumulateur) + new Number(valeurCourante);
      negative = res < 0;
      return res == 0 ? [] : res;
    })
    .toString()
    .split("");

  if (negative) {
    array.shift();
    array[0] = "-" + array[0];
  }

  return array.map((n) => new Number(n));
};

console.log(addArrays, addArrays([], [-7, 2, 2, 8]));
