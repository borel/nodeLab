const moonImg = { full: "\u{1f315}", half: "\u{1f317}", empty: "\u{1f311}" };
const moons = { full: "o", half: "c", empty: "x" };

const moonRating = (rating) => {
  rating = Math.round(rating);
  let moonRating = "";
  while (moonRating.length < 5) {
    let concat =
      rating >= 2 ? moons.full : rating >= 1 ? moons.half : moons.empty;
    rating = rating - 2;
    moonRating = moonRating.concat(concat);
  }

  return moonRating;
};

const moonRatingBis = (rating) => {
  const r = Math.round(rating);
  const f = Math.floor(r / 2);
  const h = r % 2;
  const e = 5 - f - h;

  return moons.full.repeat(f) + moons.half.repeat(h) + moons.empty.repeat(e);
};

console.log(moonRating(3.9));
console.log(moonRatingBis(3.9));

console.log(moonRating(6.1));
console.log(moonRatingBis(6.1));