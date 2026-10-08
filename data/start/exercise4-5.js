// Exercises 4 and 5: variables as arguments, and data you can see
// beat comes from exercise3.js. Every file on the page can use the variables the others make.

function playNote(name, length, time) {
  // TODO 5: log what is playing, before the note plays:
  //         console.log("Playing " + name + " for " + length);
  synth.triggerAttackRelease(name, length, time);
}

// TODO 4a: store the three notes and one length in variables, here, above the function.
// TODO 4b: use those variables in the calls below instead of the values typed in.
// TODO 4c: change the length variable once. Do all three notes change?

const note3 = "D4"
const note4 = "B4"
const note5 = "C4"
let duration3 = "8n"
function exercise4(start) {
  playNote(note3, duration3, start);
  playNote(note4, duration3, start + beat);
  playNote(note5, duration3, start + beat * 2);
}
console.log("Playing " + note3 + note4 + note5 + " for " + duration3)
// ---------- You don't need to change anything below this line ----------

playOnClick("play-4", exercise4);
