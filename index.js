let score = 0;
let timeLeft = 30;

const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const gameArea = document.getElementById("game-area");

// Move the box to random positions
function moveBox() {
  const maxX = gameArea.clientWidth - box.clientWidth;
  const maxY = gameArea.clientHeight - box.clientHeight;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

// Update score and move box when clicked
box.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveBox();
});

// Countdown timer
const countdown = setInterval(() => {
  timeLeft--;
  timeDisplay.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(countdown);
    box.style.display = "none";
    alert("Game over! Your score is: " + score);
  }
}, 1000);

// Start the game
moveBox();
