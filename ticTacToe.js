//Create a Tic Tac Toe Game


class Board extends Array{
    constructor(){
        super(Array)
        this.currentPlayer = ""
        this.firPlayerToken = ""
        this.secPlayerToken = ""
        this.hasWinner = false;

    }
    createTable(){
        for (let index = 1; index <9; index ++) {
            this.push(index);
        }
    }
    displayBoard()
    {
        let currentBoard = "\n"
        let count = 0;
        for(let index = 0; index < this.length; index++){
            currentBoard += "| " + this[index] + " |";
            count += 1; 
            if(count === 3){
                currentBoard += "\n================\n";
                count = 0
            }
        }
        return currentBoard;
    }

    setPlayerTokens() {
        this.firPlayerToken = document.getElementById("player1").value;
        this.secPlayerToken = document.getElementById("player2").value;
        this.currentPlayer = this.firPlayerToken;
        let curPlayer = document.getElementById("displayCurrentPlayer").innerText = "Current Player : " + this.currentPlayer;
   
    }
    changeCurrentPlayer(){

        if (this.currentPlayer === this.firPlayerToken){
            this.currentPlayer = this.secPlayerToken;
        }
        else {
            this.currentPlayer = this.firPlayerToken;
        }
        let curPlayer = document.getElementById("displayCurrentPlayer").innerText = "Current Player : " + this.currentPlayer;
    }

    checkWin(location){
        console.log(location);
        let winner = document.getElementById("message").innerText = this.currentPlayer + "is the winner!";
        const halfWay = this.length/2;
        const sumLocHalf = halfWay-location;

        //Evaluate for even numbers
        if(location %2 === 0){
            //Check horizontal
                //Check 4 and 6
                if(Math.abs(sumLocHalf) === 1) {
                    return
                }
                    
            //Check Vertical

        }

        //evaluate for odd numbers
        else if (location%2 === 1){
            //Check Horizontal
            return
            //check Vertical

            //Check Diagonal

        }

        //evaluate for 5
        else{
            return
        }
        console.log(halfWay);
    }
}

const gameBoard = new Board();
gameBoard.createTable();
gameBoard.setPlayerTokens();
let pieces = document.getElementById("1");

//on click events for each element in the square
for (let index = 1; index <=9; index++) {
    pieces = document.getElementById(index.toString());
    pieces.onclick= function(){
        if(gameBoard.currentPlayer === gameBoard.firPlayerToken)
            this.style.backgroundColor = "blue";
        else{
            this.style.backgroundColor = "red";
        }
        this.innerText = gameBoard.currentPlayer;
        gameBoard.checkWin(index);
        gameBoard.changeCurrentPlayer();
        

    };
    console.log(gameBoard.currentPlayer)
}

//make the on click event for player tokens
const start = document.getElementById("beginGame");
start.onclick = function(){
gameBoard.setPlayerTokens();  
//console.log(gameBoard.firPlayerToken)  
}
