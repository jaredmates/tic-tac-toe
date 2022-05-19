let players = {
  player1: "X",
  player2: "O",
};

let gameBoard = {
  gameBoard: ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
};

let displayController = {
  // display X or O on square
};

// const personFactory = (name, age) => {
//     const sayHello = () => console.log('hello!');
//     return { name, age, sayHello };
//   };

let container = document.querySelector(".container");
let squares = document.querySelectorAll(".square");

// squares.forEach((square) => {
//   // and for each one we add a 'click' listener
//   square.addEventListener("click", () => {
//     // if (player1)
//     //   Call function that puts a zero if player 1
//     //   Or do it in this statement
//     // else
//     // Call function that puts an x if player 2
//   });
// });

// function addZero() {
//     square.textContent = "O";
// container.appendChild(square);

// }
// function addX() {
//     square.textContent = "X";
// container.appendChild(square);
// }
