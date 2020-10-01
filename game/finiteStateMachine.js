const q1 = "q1";
const q2 = "q2";
const q3 = "q3";

const ways = [
  { departure: q1, value: 0, arrival: q1 },
  { departure: q1, value: 1, arrival: q2 },
  { departure: q2, value: 0, arrival: q3 },
  { departure: q2, value: 1, arrival: q2 },
  { departure: q3, value: 1, arrival: q2 },
  { departure: q3, value: 0, arrival: q2 },
];

function Automaton() {}

Automaton.prototype.readCommands = function(commands) {
  let currentPosition = q1;

  commands.forEach((element) => {
    let position = ways.filter(
      (way) => way.departure == currentPosition && way.value == element
    );
    currentPosition = position[0].arrival;
  });

  return currentPosition == q2 ? true : false;
};

var myAutomaton = new Automaton();
console.log(myAutomaton.readCommands(["1", "0", "0", "1", "0"]));
