// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;
// Add random word
function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerText = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerText = score;
}

// Typing event
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    updateScore();
    addWordToDOM();
    time += 5;
    timeEl.innerText = time + "s";
    e.target.value = "";
  }
});

// Update time
function updateTime() {
  time--;
  timeEl.innerText = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

// Game over
function gameOver() {
  endgameEl.style.display = "flex";
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;
}

// Timer
const timeInterval = setInterval(updateTime, 1000);

// add the event listner to the settings button that will hide settings
settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("hide");
});

//add the event listner for the settings form to chande Difficulty 
settingsForm.addEventListener("change", (e) => {
  const difficulty = e.target.value;

  if (difficulty === "hard") {
    time += 2;
  } else if (difficulty === "medium") {
    time += 3;
  } else {
    time += 5;
  }
});

// Start game
addWordToDOM();
text.focus();
timeEl.innerText = time + "s";