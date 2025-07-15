let cpuWin = 0;
let playerWin = 0;


 function cpuPicker(genNum) {
  if (genNum <= 100/3 ) {
    return "R";
  }
  else if (genNum >= 100 * (2/3)) {
    return "P";
  }
  else {
    return "S";
  }
}

const output = document.querySelector("#gameResults");
const playerOptions = document.querySelector(".choices");
const para = document.createElement("p");

  playerOptions.addEventListener("click", (event) => {
    let randomNum = Math.floor(Math.random() * 100);
    console.log(randomNum);
    let cpuChoice = cpuPicker(randomNum);
    console.log(cpuChoice);

    if (event.target.id === cpuChoice ) {
      para.textContent = "the round is a draw";
      output.appendChild(para);
    }
    else if (event.target.id == "P" && cpuChoice == "R" ||
             event.target.id == "S" && cpuChoice == "P" ||
             event.target. id == "R" && cpuChoice == "S") {
      para.textContent = "Player wins!";
      output.appendChild(para);
      playerWin++;
    console.log(`The score is ${cpuWin} to ${playerWin}`)

    }
    else {
      para.textContent = "CPU wins!";
      output.appendChild(para);
      cpuWin++;
    }
    console.log(`The score is ${cpuWin} to ${playerWin}`)

  })

const endGameResult = document.querySelector("#gameEnd");
const announce = document.createElement("h1");

function gameOver(cpuWin, playerWin) {
  if (cpuWin == 5) {
    announce.textContent = `CPU wins ${cpuWin} to ${playerWin}`
    endGameResult.appendChild(announce)
  }
  else if (playerWin == 5) {
    announce.textContent = `Player wins ${playerWin} to ${cpuWin}`
    endGameResult.appendChild(announce)
  }
}
