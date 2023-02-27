place_btn = document.getElementById("place-letter");
place_btn.addEventListener("click", place);
_status = document.getElementById("status");
word = document.getElementsByClassName("word");
try_again = document.getElementById("again");
try_again.style.display = "none";
var points = 5;
var correct = false;
var arr = [
  "procrastination",
  "psychobiography",
  "photosynthesize",
  "jogging",
  "awkward",
  "sympathetically",
  "Zombie",
  "hangman",
  "success",
  "witchcraft",
];
var correct_word = arr[randomNumber(1, 10)];
var letter_count = 0;
nb_letters = document.getElementById("nb-of-letters");
nb_letters.innerText = "The word has " + correct_word.length + " letters";
// for (i = 0; i < word.length; i++) {
//   word[i].style.border = "red";
// }
// const place = () => {
//   alert("letter");
// };
for (i = 0; i < correct_word.length; i++) {
  guessing_word = document.getElementById("guessing-word");
  e = document.createElement("span");
  e.innerText = "*";
  guessing_word.appendChild(e);
  e.classList.add("word");
}
letter = document.getElementById("letter");
function place() {
  correct = false;
  for (i = 0; i < correct_word.length; i++) {
    if (correct_word[i] == letter.value) {
      word[i].innerText = letter.value;
      _status.innerText = "You got it right!";
      _status.style.color = "green";
      correct = true;
      letter_count++;
      letter.value = "";
    }
  }

  if (correct == false) {
    points--;
    letter.value = "";
    _status.innerText = "You lost a point\nRemaining points: " + points;
    _status.style.color = "red";
    if (points == 0) {
      _status.innerText = "You're hanged!";
      _status.style.color = "red";
      try_again.style.display = "block";
      try_again.innerText = "Try again";
      try_again.addEventListener("click", generate_new);
    }
  } else if (letter_count == correct_word.length) {
    _status.innerText = "Congratulations!";
    _status.style.color = "green";
    try_again.style.display = "block";
    try_again.innerText = "Play again";
    try_again.addEventListener("click", generate_new);
  }
}
function generate_new() {
  try_again.style.display = "none";
  points = 5;
  correct = false;
  correct_word = arr[randomNumber(1, 6)];
}
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
