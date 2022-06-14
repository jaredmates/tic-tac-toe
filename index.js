const mainContent = document.querySelector("main");
const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const playerOne = document.querySelector(".one");
const playerTwo = document.querySelector(".two");
const gameResult = document.querySelector(".game-result");
const modal = document.getElementById("myModal");
const content = document.querySelector(".close");
const selectPlayerContainer = document.querySelector(
  ".select-player-container"
);

const gameBoard = [];

let draw = 0;
let user;

let players = {
  player1: "X",
  player2: "O",
};

// Creates Reset Button that appears at the end
content.addEventListener("click", () => {
  location.reload();
});

playerOne.addEventListener("click", () => {
  user = players.player1;
  hideStartScreen();
});

playerTwo.addEventListener("click", () => {
  user = players.player2;
  hideStartScreen();
});

squares.forEach((square, id) => {
  square.addEventListener("click", squareClicked);
});
// }

function squareClicked(e) {
  const id = e.target.id;
  console.log(e);
  if (!gameBoard[id]) {
    gameBoard[id] = user;
    draw++;
    e.target.textContent = user;
    console.log(draw);
    if (userWon()) {
      console.log(draw);
      activateModal();
      return;
    }
    if (draw === 9) {
      activateModal();
      return;
    }
    switchUserValue();
  }
}

function userWon() {
  if (gameBoard[0] === user) {
    if (gameBoard[1] === user && gameBoard[2] === user) {
      return true;
    }
    if (gameBoard[3] === user && gameBoard[6] === user) {
      return true;
    }
    if (gameBoard[4] === user && gameBoard[8] === user) {
      return true;
    }
  }
  if (gameBoard[8] === user) {
    if (gameBoard[2] === user && gameBoard[5] === user) {
      return true;
    }
    if (gameBoard[6] === user && gameBoard[7] === user) {
      return true;
    }
  }
  if (gameBoard[4] === user) {
    if (gameBoard[1] === user && gameBoard[7] === user) {
      return true;
    }
    if (gameBoard[3] === user && gameBoard[5] === user) {
      return true;
    }
    if (gameBoard[2] === user && gameBoard[6] === user) {
      return true;
    }
  }
}

function switchUserValue() {
  if (user === "X") {
    user = "O";
  } else {
    user = "X";
  }
}

function hideStartScreen() {
  selectPlayerContainer.style.opacity = 0;
  selectPlayerContainer.style.transform = "scale(0)";
  // Add timeout with length matching animation-duration
  window.setTimeout(function () {
    selectPlayerContainer.style.display = "none";
    mainContent.style.display = "block";
  }, 400);
}

function activateModal() {
  if (draw === 9) {
    gameResult.textContent = "Tie! ";
    draw = 0;
    modal.style.display = "block";
  } else {
    gameResult.textContent = `${user} Wins! `;
    modal.style.display = "block";
  }
}
