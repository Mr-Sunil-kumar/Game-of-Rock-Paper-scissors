let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const drawGame = () => {
    console.log("Game was draw. Please try again! ");
    msg.innerText = "Game was draw. Please try again!"
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win :)")
        msg.innerText = `You win :) Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("you lose :(")
        msg.innerText = `You lose :( ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    };
};

const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randamIdx = Math.floor(Math.random() * 3);
    return options[randamIdx];

};

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompchoice();
    console.log("computerChoice = ", compChoice);

    if (userChoice === compChoice) {
        //drawGame
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    };
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });

});
