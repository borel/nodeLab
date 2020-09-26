const isPangram = (string) => {
  const regex = /[a-z]/g;
  return string.toLowerCase().match(regex).reduce((accumulateur, valeurCourante) => {
    if (!accumulateur.includes(valeurCourante)) {
      accumulateur.push(valeurCourante);
    }
    return accumulateur;
  }, []).sort().length === 26;
};

const paragraph = "The quick brown fox jumps over the lazy dog.";
const res = isPangram(paragraph);

console.log('res', {res});

