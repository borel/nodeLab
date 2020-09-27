const isInMiddle = (sentence) => {
  const toFind = "abc";
  let index = 0;
  let size = sentence.length;
  while (sentence.indexOf(toFind, index) != -1) {
    index = sentence.indexOf(toFind, index);
    if ([0, -1, 1].includes(size - (index + 3) - index)) {
      return true;
    }
    index = index + 3;
  }
  return false;
};

const res = isInMiddle("AabcBBabcAabcBBe");
console.log("res", { res });

const isInMiddle = (seq) => {
  while (seq.length > 4) {
    seq = seq.slice(1, -1);
  }
  return seq.indexOf("abc") >= 0;
};
const res = isInMiddle("AabcBBabcAabcBBe");
console.log("res", { res });
