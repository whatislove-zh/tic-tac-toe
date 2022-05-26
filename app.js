const box = document.querySelectorAll(".box");
let move = 0;
const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const winner = document.querySelector(".winner-wrap")
const winnerText = document.querySelector(".winner-text")
const startBtn = document.querySelector(".start")



const startGame = () =>{
  winner.classList.add("fadeOut")
  winner.classList.remove("fadeIn")
  for (i = 0; i < box.length; i++) {
    box[i].innerHTML = '';
  }
}

startGame()
console.log(box)

startBtn.addEventListener("click", startGame)

for (i = 0; i < box.length; i++) {
  box[i].addEventListener("click", (e) => {
    move % 2 === 0 ? (e.target.textContent = "X") : (e.target.textContent = "O");
    move++;
    checkWinner();
    
  });
}

const checkWinner = () =>{
  result = 'it is tie'
  let counter = 0;
  for (i = 0; i < box.length; i++) {
    if (box[i].innerHTML == ''){
      break
    } else{
      counter++
    } if(counter == 9) {
      showWinner(result)
    }
  }
  
  

  for (i = 0; i < winCombo.length; i++) {
    if (
      box[winCombo[i][0]].textContent == "X" &&
      box[winCombo[i][1]].textContent == "X" &&
      box[winCombo[i][2]].textContent == "X"
    ) {
      result = "X's wins";
      showWinner(result)
    } else if (
      box[winCombo[i][0]].textContent == "O" &&
      box[winCombo[i][1]].textContent == "O" &&
      box[winCombo[i][2]].textContent == "O"
    ) {
      result = "O's wins";
      showWinner(result)
    }
  }

  
}

const showWinner = (result) =>{
  winner.classList.add("fadeIn")
  winner.classList.remove("fadeOut")
  winnerText.textContent = result;
}

