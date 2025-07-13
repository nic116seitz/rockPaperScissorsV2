let cpuWin = 0;
let playerWin = 0;

let randomNum = Math.floor(Math.random() * 100);

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
let cpuChoice = cpuPicker(randomNum)
console.log (cpuChoice)
console.log(randomNum)

const output = document.querySelector("#gameResults");
const playerOptions = document.querySelector(".choices");
const para = document.createElement("p");

  playerOptions.addEventListener("click", (event) => {
    if (event.target.id === cpuChoice ) {
      para.textContent = "the round is a draw"
      output.appendChild(para)
    }
    else if (event.target.id == "P" && cpuChoice == "R" ||
             event.target.id == "S" && cpuChoice == "P" ||
             event.target. id == "R" && cpuChoice == "S") {
      para.textContent = "Player wins!"
      output.appendChild(para)
    }
    else {
      para.textContent = "CPU wins!"
      output.appendChild(para)
    }
  })

