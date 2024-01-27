const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");
const playerXScore = document.querySelector(".playerXScore");
const playerOScore = document.querySelector(".playerOScore");
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
    choice.disabled = true;
    if (currentPlayer === PLAYER_O) {
      currentPlayer = PLAYER_X;
      choice.style.color = "blue";
      
    } else {
      currentPlayer = PLAYER_O;
      choice.style.color = "red";
    }
    let ifWin = checkWin();
    if (ifWin == "X") {
      playerXScore.innerHTML++;
      result.innerHTML = "X Won🏆";
      result.style.color = "red";
      setTimeout(reset, 1000);
    } else if (ifWin == "O") {
      playerOScore.innerHTML++;
      result.innerHTML = "O Won🏆";
      result.style.color = "blue";
      setTimeout(reset, 1000);
    } else if (n == 9) {
      result.innerHTML = "It's a Draw!";
      result.style.color = "yellow";
      setTimeout(reset, 1000);
    }
  });
});

function checkWin() {
  let winner = false;
  win.forEach((element) => {
    let val1 = buttons[element[0]].innerHTML;
    let val2 = buttons[element[1]].innerHTML;
    let val3 = buttons[element[2]].innerHTML;
    if (
      val1 != "" &&
      val2 != "" &&
      val3 != "" &&
      val1 == val2 &&
      val2 == val3
    ) {
      winner = val1;
    }
  });
  return winner;
}

function reset() {
  n = 0;
  buttons.forEach((choice) => {
    choice.innerHTML = "";
    choice.disabled = false;
    result.innerHTML = "Pick your move!";
    result.style.color = "#12e049";
  });
}
