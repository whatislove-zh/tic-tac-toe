var origBoard;
const huPlayer = "X";
const aiPlayer = "O";
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

const cells = document.querySelectorAll(".cell");
startGame();

function startGame() {
    //fade out the endgame menu
    document.querySelector(".end-game").classList.add("fadeOut")
    document.querySelector(".end-game").classList.remove("fadeIn")

    //clear the board
    origBoard = Array.from(Array(9).keys());
    for (i = 0; i < cells.length; i++){
        cells[i].innerText = '';
        cells[i].style.removeProperty("background-color");

        //add clicl event listener to every cells
        cells[i].addEventListener("click", turnClick, false)
    }

    function turnClick(square){
        turn(square.target.id, huPlayer)
    }
    
    function turn(squareId, player){
        origBoard[squareId] = player;
        document.getElementById(squareId).innerText = player;
    }


}

