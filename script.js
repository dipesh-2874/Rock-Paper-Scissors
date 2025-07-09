let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#userScore");
const cScore = document.querySelector("#compScore");
const warning = document.querySelector(".msg-container");
const warn = document.querySelector(".warning");
const loader = document.querySelector(".loader");

const draw = () =>{
    msg.innerText = "It's a Draw";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore += 1;
        uScore.innerText = userScore;
    }
    else{
        msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore += 1;
        cScore.innerText = compScore;
    }
} 

const genCompChoice = () => {
    const choiceList = ["rock","paper","scissors"];
    const choiceIdx = Math.floor(Math.random() * 3);
    return choiceList[choiceIdx];
}

const playGame = (userChoice, compChoice) =>{
    if(userChoice === compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = (compChoice === "paper")?false:true;
        }
        else if(userChoice === "paper"){
            userWin = (compChoice === "scissors")?false:true;
        }
        else if(userChoice === "scissors"){
            userWin = (compChoice === "rock")?false:true;
        }
    showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        warn.style.display = "none";
        const userChoice = choice.getAttribute("id");
        const compChoice = genCompChoice();
        playGame(userChoice, compChoice);
    });
});

warning.addEventListener("click", () => {
    warn.style.display = "inline-flex";
});

window.addEventListener("load", () => {
    loader.style.display = "none";
});