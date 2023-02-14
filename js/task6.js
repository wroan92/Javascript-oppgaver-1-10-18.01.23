const buttons = document.querySelectorAll("button");
const choices = ["rock", "paper", "scissors"];
const result = document.getElementById("result");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieScore = document.getElementById("tie-score");

let score = {
  player: 0,
  computer: 0,
  tie: 0,
};

const playRound = (player, computer) =>
  player === computer
    ? "It's a tie!"
    : (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ? "You win!"
    : "You lose!";

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const roundResult = playRound(playerChoice, computerChoice);
    result.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${roundResult}`;
    if (roundResult === "You win!") {
      score.player++;
    } else if (roundResult === "You lose!") {
      score.computer++;
    } else {
      score.tie++;
    }
    playerScore.textContent = score.player;
    computerScore.textContent = score.computer;
    tieScore.textContent = score.tie;
  })
);
