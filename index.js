let players = {
  player1: "X",
  player2: "O",
};

function displayController(el) {
  // display X or O on square
  el.textContent = user;
  // container.appendChild(el);
  switchValue();
}

function switchValue() {
  if (user === "X") {
    user = "O";
  } else {
    user = "X";
  }
}

const selectPlayerContainer = document.querySelector(
  ".select-player-container"
);
const mainContent = document.querySelector("main");
const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const playerOne = document.querySelector(".one");
const playerTwo = document.querySelector(".two");
const gameResult = document.querySelector(".game-result");
const modal = document.getElementById("myModal");

let user;
let opponent;

playerOne.addEventListener("click", () => {
  user = players.player1;
  opponent = players.player2;
  hideStartScreen();
});

playerTwo.addEventListener("click", () => {
  user = players.player2;
  opponent = players.player1;
  hideStartScreen();
});

squares.forEach((square) => {
  // and for each one we add a 'click' listener
  square.addEventListener("click", (e) => {
    if (square.textContent.trim() === "") {
      displayController(e.target);
    } else {
      return;
    }
  });
});

function hideStartScreen() {
  selectPlayerContainer.style.opacity = 0;
  selectPlayerContainer.style.transform = "scale(0)";
  // Add timeout with length matching animation-duration
  window.setTimeout(function () {
    selectPlayerContainer.style.display = "none";
    mainContent.style.display = "block";
  }, 400);
}

const playerOneSolutions = {
  top: ["X", "X", "X", " ", " ", " ", " ", " ", " "],
  horizontal: [" ", " ", " ", "X", "X", "X", " ", " ", " "],
  bottom: [" ", " ", " ", " ", " ", " ", "X", "X", "X"],
  left: ["X", " ", " ", "X", " ", " ", "X", " ", " "],
  vertical: [" ", "X", " ", " ", "X", " ", " ", "X", " "],
  right: [" ", " ", "X", " ", " ", "X", " ", " ", "X"],
  diagnalLeft: ["X", " ", " ", " ", "X", " ", " ", " ", "X"],
  diagnalRight: [" ", " ", "X", " ", "X", " ", "X", " ", " "],
};

const playerTwoSolutions = {
  top: ["O", "O", "O", " ", " ", " ", " ", " ", " "],
  horizontal: [" ", " ", " ", "O", "O", "O", " ", " ", " "],
  bottom: [" ", " ", " ", " ", " ", " ", "O", "O", "O"],
  left: ["O", " ", " ", "O", " ", " ", "O", " ", " "],
  vertical: [" ", "O", " ", " ", "O", " ", " ", "O", " "],
  right: [" ", " ", "O", " ", " ", "O", " ", " ", "O"],
  diagnalLeft: ["O", " ", " ", " ", "O", " ", " ", " ", "O"],
  diagnalRight: [" ", " ", "O", " ", "O", " ", "O", " ", " "],
};

// LOOP THROUGH GAMEBOARD CHECKING SCORE
// function scoreTracking() {
//   if (playerOneSolutions match) {
//     output modal player1 wins
// activateModal()
//   }
//   else if (playerTwoSolutions match) {
//     output modal player2 wins
// activateModal()
//   }
//   else {
//     activate modal saying Tie
// activateModal()
//   }
// }

// Creates Reset Button that appears at the end
// const content = document.querySelector(".close");
// content.addEventListener("click", () => {
//   location.reload();
// });

// function activateModal() {
//   if (playerOne) {
//     gameResult.textContent = "Player 1 Wins! ";
//     modal.style.display = "block";
//   }
//   if (playerTwo) {
//     gameResult.textContent = "Player 2 Wins! ";
//     modal.style.display = "block";
//   } else {
//     gameResult.textContent = "Tie! ";
//     modal.style.display = "block";
//   }
// }
