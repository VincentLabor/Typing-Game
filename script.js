let diffSetting = document.getElementById("difficultySetting");
let difftext = document.getElementById("diffText");
let textBar = document.getElementById("textInput");
let actualDiff = document.getElementById("difficultyValue");
let wordToBeTyped = document.getElementById("word");

let removeDiffText = () => {
  difftext.innerHTML = "";
};

let wordList = "Poggers";

let clearWindow = () => {
  //This clears the html from the window.
  difftext.innerHTML = "";
  diffSetting.innerHTML = "";
};

let chosenDifficulty = (diff) =>{
    console.log(diff);
    if(diff === "Easy"){
        wordToBeTyped.innerHTML = wordList;
    } else if(diff === "Medium"){
        wordToBeTyped.innerHTML = "MediumPoggers"
    } else {
        wordToBeTyped.innerHTML = "HardPogoPoggers"
    }
}

diffSetting.addEventListener("submit", (e) => {
  e.preventDefault();
  clearWindow();
  //This returns the difficulty setting necessary
  chosenDifficulty(actualDiff.value)
  textBar.removeAttribute("hidden");
  
});
