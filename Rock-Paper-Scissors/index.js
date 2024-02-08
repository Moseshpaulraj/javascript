
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay=document.getElementById("playerscoreDisplay");
const computerscoreDisplay=document.getElementById("computerscoreDisplay");
let playerscore = 0;
let computerscore =0;

function playgame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerchoice === computerchoice) {
        result = "IT'S A TIE !";
    }
    else {
        switch (playerchoice) {
            case "rock":
                result = (computerchoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerchoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerchoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    playerDisplay.textContent=`PLAYER:${playerchoice}`;
    computerDisplay.textContent=`COMPUTER:${computerchoice}`;
    resultDisplay.textContent= result;

    resultDisplay.classList.remove("greentext","redtext");

    switch(result){
        case "YOU WIN" :
            resultDisplay.classList.add("greentext");
            playerscore++;
            playerscoreDisplay.textContent=playerscore;
            break;
        case "YOU LOSE" :
            resultDisplay.classList.add("redtext");
            computerscore++;
            computerscoreDisplay.textContent=computerscore;
            break;

    }




}
