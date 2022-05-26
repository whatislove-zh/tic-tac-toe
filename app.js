/* const area = document.getElementById("area");
let move = 0;
let result = "";

area.addEventListener("click", (e) => {
  move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
  move++;
  check();
  
  console.log(e.target)
});

const check = () => {
  const boxes = document.getElementsByClassName("box");
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML == "X" &&
      boxes[arr[i][1]].innerHTML == "X" &&
      boxes[arr[i][2]].innerHTML == "X"
    ) {
      result = "крестики";
    } else if (
      boxes[arr[i][0]].innerHTML == "X" &&
      boxes[arr[i][1]].innerHTML == "X" &&
      boxes[arr[i][2]].innerHTML == "X"
    ) {
      result = "нолики";
    }
  }
};

const prepareResult = (winner) => {}; */
