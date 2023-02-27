// reset_btn = document.getElementById("reset");
guessing_word = document.getElementById("guessing-word");
letter = document.getElementById("letter");
_status = document.getElementById("status");
word = document.getElementsByClassName("word");
try_again = document.getElementById("again");
try_again.style.display = "none";
place_btn = document.getElementById("place-letter");
place_btn.disabled = false;
place_btn.addEventListener("click", place);
var _score = 0;
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
var correct_word = arr[randomNumber(0, 9)];
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
function place() {
  correct = false;
  if (letter.value.length > 1) {
    _status.innerText = "Enter one letter only";
    letter.value = "";
  } else {
    for (i = 0; i < correct_word.length; i++) {
      if (correct_word[i] == letter.value) {
        word[i].innerText = letter.value;
        _status.innerText = "You got it right!";
        _status.style.color = "green";
        document.getElementById("rem-points").innerText =
          "Remaining points: " + points;
        correct = true;
        letter_count++;
      }
    }
    letter.value = "";
    if (!correct) {
      points--;
      _status.innerText = "You lost a point";
      document.getElementById("rem-points").innerText =
        "Remaining points: " + points;
      _status.style.color = "red";
      if (points == 0) {
        _status.innerText = "You're hanged!";
        document.getElementById("rem-points").innerText = "";
        _status.style.color = "red";
        try_again.style.display = "block";
        try_again.innerText = "Try again";
        place_btn.disabled = true;
        try_again.addEventListener("click", generate_new);
      }
    } else if (letter_count == correct_word.length) {
      _status.innerText = "Congratulations!";
      document.getElementById("rem-points").innerText = "";
      _status.style.color = "green";
      try_again.style.display = "block";
      try_again.innerText = "Play again";
      _score++;
      document.getElementById("Score").innerText = "Score: " + _score;
      place_btn.disabled = true;
      try_again.addEventListener("click", generate_new);
    }
  }
}
function generate_new() {
  while (guessing_word.hasChildNodes()) {
    guessing_word.removeChild(guessing_word.firstChild);
  }
  _status.innerText = "";
  try_again.style.display = "none";
  place_btn.disabled = false;
  points = 5;
  correct = false;
  correct_word = arr[randomNumber(1, 9)];
  nb_letters.innerText = "The word has " + correct_word.length + " letters";
  for (i = 0; i < correct_word.length; i++) {
    e = document.createElement("span");
    e.innerText = "*";
    guessing_word.appendChild(e);
    e.classList.add("word");
  }
}
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// reset_btn.addEventListener("click", function () {
//   score = 0;
//   generate_new();
// });
