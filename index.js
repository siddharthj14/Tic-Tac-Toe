let O = true;
let X = false;
let array = [];
let n = 0;
document.querySelectorAll(".btn").forEach((choice) => {
  choice.addEventListener("click", () => {
    n++;
    if (O) {
      choice.innerHTML = "O";
      array[choice.id] = "O";
      O = false;
      X = true;
    } else {
      choice.innerHTML = "X";
      array[choice.id] = "X";
      X = false;
      O = true;
    }
    if (checkWin("X")) {
      document.querySelector(".playerXScore").innerHTML++;
      document.querySelector(".result").innerHTML = "X Won!";
      reset();
    } else if (checkWin("O")) {
      document.querySelector(".playerOScore").innerHTML++;
      document.querySelector(".result").innerHTML = "O Won!";

      reset();
    } else if (n == 9) {
      document.querySelector(".result").innerHTML = "It's a Draw!";
      reset();
    }
  });
});
function checkWin(char) {
  if (
    valuesEqual(0, 1, 2, char) ||
    valuesEqual(3, 4, 5, char) ||
    valuesEqual(6, 7, 8, char) ||
    valuesEqual(0, 3, 6, char) ||
    valuesEqual(1, 4, 7, char) ||
    valuesEqual(2, 5, 8, char) ||
    valuesEqual(0, 4, 8, char) ||
    valuesEqual(2, 4, 6, char)
  ) {
    return true;
  } else {
    return false;
  }
}

function valuesEqual(a, b, c, char) {
  if (array[a] == char && array[b] == char && array[c] == char) {
    return true;
  } else {
    return false;
  }
}

function reset() {
  array = [];
  n = 0;
  document.querySelectorAll(".btn").forEach((choice) => {
    choice.innerHTML = "";
  });
}
