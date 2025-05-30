let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choices");
const resetButton = document.querySelector(".resetButton");
const msg = document.querySelector(".msg");

resetButton.addEventListener("click",()=>{
    userScore = 0;
    computerScore = 0;
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
    msg.innerText="Play your move";
    msg.style.backgroundColor="white";
})
const genComputerChoice =()=>{
    const options=["rock","paper","scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};   

const showResult = (uwin)=>{
    if(uwin){
        console.log("you wins");
        userScore++;
        document.getElementById("userScore").innerText = userScore;
        msg.innerText="you wins";
        msg.style.color="green";
        msg.style.backgroundColor="white";
    } else {
        console.log("you lose");
        computerScore++;
        document.getElementById("computerScore").innerText = computerScore;
        msg.innerText="you lose";
        msg.style.color="red";
        msg.style.backgroundColor="white";
    }
}

const playGame =(userChoice)=>{
    const computerChoice = genComputerChoice();
    console.log("user ",userChoice);
    console.log("comp ",computerChoice);
    if(userChoice==computerChoice){
        msg.innerText="draw";
        msg.style.color="black";
        msg.style.backgroundColor="white";
    }
    else{
        let uwin=true;
        if(userChoice === "rock"){
            uwin = computerChoice === "paper"?false:true;
        }
        else if(userChoice === "paper"){
            uwin = computerChoice === "scissors"?false:true;
        }
        else {
            uwin = computerChoice === "rock"?false:true;
        }
        showResult(uwin);
        
    }
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})