let diffSetting = document.getElementById("difficultySetting");
let difftext = document.getElementById("diffText");
let textBar = document.getElementById("textInput");
let actualDiff = document.getElementById("difficultyValue");
let wordToBeTyped = document.getElementById("word");
let logo = document.getElementById("logo");
let stopwatch = document.getElementById("timer");
let userScore = document.getElementById("score");
let span = document.getElementById("showMe");

let removeDiffText = () => {
  difftext.innerHTML = "";
};

let wordList = "Poggers";

let usersScore = 0;

//This clears the html from the window.
let clearWindow = () => {
  difftext.innerHTML = "";
  diffSetting.innerHTML = "";
};

//This will return to orginal window after a while.
let returnToHomeTimer = () => {
  setTimeout(() => {
    logo.click();
  }, 20000);
};

let returnToHome = () => {
  logo.click();
};

//This changes words depending on diffilculty selected
let chosenDifficulty = (diff) => {
  if (diff === "Easy") {
    wordToBeTyped.innerHTML = wordList;
  } else if (diff === "Medium") {
    wordToBeTyped.innerHTML = "Where is your precious light now, Uther?";
  } else {
    wordToBeTyped.innerHTML =
      "Do not speak to me! You may look like Arthas, but you are nothing like him!";
  }
};

//Checks what difficulty is selected and shows diff HTML based on difficulty selected
diffSetting.addEventListener("submit", (e) => {
  e.preventDefault();
  clearWindow();
  //have to add parameter of chosen diff value.
  chosenDifficulty(actualDiff.value);
  textBar.removeAttribute("hidden");
  returnToHomeTimer();
});

let areWordsCorrect = (userTxt, txtTobeTyped) => {
  // userTxt = userTxt.split(" ");
  // txtTobeTyped = txtTobeTyped.split(" ");

  let charVal = 0;

  for (let i = 0; i < userTxt.length; i++) {
    if (userTxt[i] === txtTobeTyped[i]) {
      // wordToBeTyped.style.color = "green";
      charVal++;
      span.innerHTML ='<span class="green">' + userTxt.substring(0,charVal) + '</span>';
    }
  }
};

//Checks that every character is properly typed
let checkText = (userTypedText, textToBeTyped) => {
  if (userTypedText === textToBeTyped) {
    returnToHome();
  }
};

//Checks if user typed the text properly
textBar.addEventListener("input", (e) => {
  let inputtedText = e.target.value;
  let charVal = 0;

  checkText(inputtedText, wordToBeTyped.innerHTML);

  areWordsCorrect(inputtedText, wordToBeTyped.innerHTML);

  // for(let i=0; i<wordToBeTyped; i++){
  //   if(inputtedText[i] === wordToBeTyped[i] ){
  //     span.innerHTML = "e.target.value.substring(0,charVal)";
  //   }
  // }

  // span.innerHTML = e.target.value.substring(0,1) + '<span class="green">' + e.target.value.substring(1,20) + '</span>';
});

// if(checkText(inputtedText, wordToBeTyped.innerHTML) === true){
//   userScore.innerHTML = usersScore++;
// }

// if (inputtedText === wordToBeTyped.innerHTML) {
//   // returnToHome();
//   userScore.innerHTML = usersScore++;
// }
