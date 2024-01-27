let result = document.querySelector(".result");
let buttons = document.querySelectorAll(".btn");
let playerXScore = document.querySelector(".playerXScore");
let playerOScore = document.querySelector(".playerOScore");
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const PLAYER_O = "O";
const PLAYER_X = "X";
let currentPlayer = PLAYER_O;
let n = 0;

buttons.forEach((choice) => {
  choice.addEventListener("click", () => {
    n++;
    choice.innerHTML = currentPlayer;
    currentPlayer = currentPlayer === PLAYER_O ? PLAYER_X : PLAYER_O;
    choice.disabled = true;
    if (checkWin("X")) {
      playerXScore.innerHTML++;
      result.innerHTML = "X Won!";
      setTimeout(reset, 1000);
    } else if (checkWin("O")) {
      playerOScore.innerHTML++;
      result.innerHTML = "O Won!";
      setTimeout(reset, 1000);
    } else if (n == 9) {
      result.innerHTML = "It's a Draw!";
      setTimeout(reset, 1000);
    }
  });
});
function checkWin(char) {
  let hasWin = false;
  win.forEach((element) => {
    let val1 = buttons[element[0]].innerHTML;
    let val2 = buttons[element[1]].innerHTML;
    let val3 = buttons[element[2]].innerHTML;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val2 == val3 && val3 == char) {
        hasWin = true;
      }
    }
  });
  return hasWin;
}

function reset() {
  n = 0;
  buttons.forEach((choice) => {
    choice.innerHTML = "";
    choice.disabled = false;
  });
}
