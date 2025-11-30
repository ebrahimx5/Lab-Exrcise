/*-------------------------------- Constants --------------------------------*/

const square = document.querySelectorAll(".sqr");
const restartBtn = document.getElementById("restart");
let message = document.getElementById("message");

// winning combinations
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [2,4,6],

let board = ["", "", "", "", "", "", "", "", ""];
let user = "X";
let gameOver = false;

message.textContent = "X starts...";

/*-------------------------------- Functions --------------------------------*/

for (let sqr of square) {
  sqr.addEventListener("click", addChoice);
  console.log(sqr);
}

function winTieLose() {
  if (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) {
    message.textContent = board[0] + "  wins!";
    gameOver = true;
    return;
  }

  if (board[3] !== "" && board[3] === board[4] && board[3] === board[5]) {
    message.textContent = board[3] + "   wins!";
    gameOver = true;
    return;
  }

  if (board[6] !== "" && board[6] === board[7] && board[6] === board[8]) {
    message.textContent = board[6] + "  wins!";
    gameOver = true;
    return;
  }

  if (board[0] !== "" && board[0] === board[3] && board[0] === board[6]) {
    message.textContent = board[0] + "  wins!";
    gameOver = true;
    return;
  }

  if (board[1] !== "" && board[1] === board[4] && board[1] === board[7]) {
    message.textContent = board[1] + "   wins!";
    gameOver = true;
    return;
  }

  if (board[2] !== "" && board[2] === board[5] && board[2] === board[8]) {
    message.textContent = board[2] + "  wins!";
    gameOver = true;
    return;
  }

  if (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) {
    message.textContent = board[0] + "  wins!";
    gameOver = true;
    return;
  }

  if (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) {
    message.textContent = board[2] + "  wins!";
    gameOver = true;
    return;
  }

  if (
    board[0] !== "" &&
    board[1] !== "" &&
    board[2] !== "" &&
    board[3] !== "" &&
    board[4] !== "" &&
    board[5] !== "" &&
    board[6] !== "" &&
    board[7] !== "" &&
    board[8] !== ""
  ) {
    message.textContent = "It's a tie!";
    gameOver = true;
  }

  if (gameOver === false) {
    if (user === "X") {
      user = "O";
    } else {
      user = "X";
    }

    message.textContent = user + " turn";
  }
}

function addChoice(choice) {
  if (gameOver === true) return;

  const clicked = choice.target;
  if (clicked.textContent !== "") return;

  clicked.textContent = user;
  console.log("Clicked square ID:", clicked.id);

  const stuffInArray = Number(clicked.id);
  board[stuffInArray] = user;

  winTieLose();
}

function restart() {
  for (let sqr of square) {
    sqr.textContent = "";
  }
  board = ["", "", "", "", "", "", "", "", ""];
  message.textContent = "Game restarted! X plays";
  user = "X";
  gameOver = false;
}

restartBtn.addEventListener("click", restart);

