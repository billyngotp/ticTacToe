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

    displayMessage(message) {
        let changeMessage = document.getElementById("message").innerText = message;
    }

    checkWin(location){
        //set Variables for starting points
        let horiIndex = (location-1) % Math.floor(Math.sqrt(this.length));
        let horiStartLoc = (location - horiIndex);
        let vertStartLoc = location - horiStartLoc + 1;
        let diagonalCheck = (Math.ceil(this.length/2) - location)
        let centerPoint = diagonalCheck + location;
        //Check 5
        
        //Check Horizontal
        if(this[horiStartLoc] === this[horiStartLoc+1] && this[horiStartLoc] === this[horiStartLoc+2])
        {
            this.hasWinner = true;
            this.displayMessage(this.currentPlayer + " is the winner!");
        }

        //Check Vertical
        console.log(vertStartLoc + this[location] + " " + this[location+3] + " " + this[location+6]);
        if(this[vertStartLoc] === this[vertStartLoc+3] && this[vertStartLoc] === this[vertStartLoc+6])
        {
            this.hasWinner = true;
            this.displayMessage(this.currentPlayer + " is the winner!");
        }

        //Check Diagonal
        console.log(centerPoint + " " + (centerPoint + diagonalCheck) + " " + (centerPoint - diagonalCheck));
        console.log(this[centerPoint] + " " + this[centerPoint + diagonalCheck] + " " + this[centerPoint - diagonalCheck])
        if ((this[centerPoint] === this[centerPoint + diagonalCheck]) && (this[centerPoint] === this[centerPoint - diagonalCheck])) {
            if (location === 5 && (centerPoint === centerPoint+4) && centerPoint === (centerPoint-4)) {
                console.log("Execute 5" + centerPoint === (centerPoint + 4) && centerPoint === (centerPoint - 4));
            }
            else{
                this.hasWinner = true;
                this.displayMessage(this.currentPlayer + " is the winner!");
            }
            
        }
    }
}


const gameBoard = new Board();
gameBoard.createTable();
gameBoard.setPlayerTokens();
let pieces = document.getElementById("1");

//display Game Start
gameBoard.displayMessage("Please type a token for player 1 and player 2");

//Click event for board
const start = document.getElementById("beginGame");
start.onclick = function(){
gameBoard.displayMessage("Game Start");    
gameBoard.setPlayerTokens();   
}

//on click events for each element in the square

for (let index = 1; index <=9; index++) {
    pieces = document.getElementById(index.toString());
    pieces.onclick= function(){
        //prevent selection if already selected
        p1 = document.getElementById("player1").innerText;
        p2 = document.getElementById("player2").innerText;
        if (this.innerText === gameBoard.firPlayerToken || this.innerText === gameBoard.secPlayerToken){
            gameBoard.displayMessage("Tab is already Occupied, try again.")
        }
        // if(p1 === "" || p2 === "") {
        //     gameBoard.displayMessage("Please type a name for Player 1 and 2.")
        // }
        else{
            if(gameBoard.currentPlayer === gameBoard.firPlayerToken) {
                this.style.backgroundColor = "blue";    
            }
            else{
                this.style.backgroundColor = "red";
            }
            this.innerText = gameBoard.currentPlayer;
            gameBoard[index] = gameBoard.currentPlayer;
            gameBoard.checkWin(index);
            gameBoard.changeCurrentPlayer();  
            
        }
    };
}

//make the on click event for player tokens

