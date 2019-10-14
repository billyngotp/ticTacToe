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
        this.displayMessage(this.currentPlayer + " you're up! Choose your spot");
    }

    displayMessage(message) {
        let changeMessage = document.getElementById("message").innerText = message;
    }
    checkWin(location){
        
        const halfWay = Math.ceil(this.length/2);
        const sumLocHalf = halfWay-location;
        //console.log(sumLocHalf + "and half way is " + halfWay);
        let posiOfNum = Math.ceil(sumLocHalf+ location);
        let winner = "";
        //Evaluate for even numbers
        if(location % 2 === 0){
            //Check horizontal
                //Check 4 and 6
                let testVar = this[location].innerText;

                console.log("testvar is " + this[posiOfNum-1] + " " + this[posiOfNum] + " " + this[posiOfNum+1]);
                if(Math.abs(sumLocHalf) === 1) {
                    this.hasWinner = true;
                    if(this[posiOfNum-1] === this[posiOfNum] && this[posiOfNum] === this[posiOfNum+1]){
                        this.displayMessage(this.currentPlayer + " is the winner!");
                    }
                }
                else{
                    
                }
                    
            //Check Vertical
        //console.log(this[location] + "is this location");
        }

        //evaluate for odd numbers
        else if (location % 2 === 1){
            //Check Horizontal
            return
            //check Vertical

            //Check Diagonal

        }

        //evaluate for 5
        else{
            return
        }
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
        //prevent selection if already selected
        if (this.innerText === gameBoard.firPlayerToken || this.innerText === gameBoard.secPlayerToken){
            console.log("has an element already")
        }
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
    console.log(gameBoard.currentPlayer + "is current player")
}

//make the on click event for player tokens
const start = document.getElementById("beginGame");
start.onclick = function(){
gameBoard.setPlayerTokens();  
//console.log(gameBoard.firPlayerToken)  
}
