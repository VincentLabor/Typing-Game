let diffSetting = document.getElementById("difficultySetting");
let difftext = document.getElementById("diffText");
let textBar = document.getElementById("textInput");
let actualDiff = document.getElementById("difficultyValue");
let wordToBeTyped = document.getElementById("word");
let logo = document.getElementById("logo");
let stopwatch = document.getElementById("timer");

let removeDiffText = () => {
  difftext.innerHTML = "";
};

let wordList = "Poggers";

//This clears the html from the window.
let clearWindow = () => {
  difftext.innerHTML = "";
  diffSetting.innerHTML = "";
};

//This will return to orginal window after a while.
let returnToHome = () => {
  setTimeout(() => {
    logo.click();
  }, 10000);
};

//This changes words depending on diffilculty selected
let chosenDifficulty = (diff) => {
  console.log(diff);
  if (diff === "Easy") {
    wordToBeTyped.innerHTML = wordList;
  } else if (diff === "Medium") {
    wordToBeTyped.innerHTML = "MediumPoggers";
  } else {
    wordToBeTyped.innerHTML = "HardPogoPoggers";
  }
};

diffSetting.addEventListener("submit", (e) => {
  e.preventDefault();
  clearWindow();
  //have to add parameter of chosen diff value.
  chosenDifficulty(actualDiff.value);
  textBar.removeAttribute("hidden");
  returnToHome();
});

textBar.addEventListener("input", (e) => {
  let inputtedText = e.target.value;
  if(inputtedText === wordToBeTyped.innerHTML){
    console.log("Bingo")
  }
});
