let cpuWin = 0;
let playerWin = 0;
for (let rounds = playerWin + cpuWin; rounds < 5; rounds++) {

let cpuChoice = function cpuchooser() {
  let randomNum = Math.floor(Math.random() * 100);
    if (randomNum <= 100/3) {
      return "Rock";
    }
    else if (randomNum <= 100 *(2/3) && randomNum >= 100/3) {
      return "Paper";
    }
    else  {
      return "Scissors";
    }
  }
  console.log(`This is cpu Choice` + cpuChoice());

  let playerOptions = document.querySelector(".choices");
  let playerChoice = "";

  playerOptions.addEventListener("click", (event) => {
    if (event.target.id === "pickRock") {
       playerChoice = "Rock"
       console.log(playerChoice)
    }
    else if (event.target.id === "pickPaper") {
       playerChoice = "Paper"
       console.log(playerChoice)
    }
    else if (event.target.id === "pickScissors") {
       playerChoice = "Scissors"
       console.log(playerChoice)
    }
  });

  let outcome = function winCondition(playerChoice, cpuChoice) {
    let resultSect = document.querySelector("#gameResults")
    if (playerChoice == cpuChoice) {
      const drawPara = document.createElement("p");
      drawPara.textContent = `This round is a draw!`
      resultSect.appendChild(drawPara);
    }
    else if (playerChoice + cpuChoice == RockScissors ||
      playerChoice + cpuChoice ==  PaperRock ||
      playerChoice + cpuChoice == scissorsPaper) {
      const winPara = document.createElement("p")
      winPara.textContent = `Player: ${playerChoice} vs CPU ${cpuChoice}. Player wins the round`
      resultSect.appendChild(winPara)
      playerWin++
    }
    else {
      const losePara = document.createElement("p")
      losePara.textContent = ` Player: ${playerChoice} vs CPU: ${cpuChoice}. You have lost the round!`
      resultSect.appendChild(losePara)
      cpuWin++
    }
  }
  console.log({outcome})

 
}
