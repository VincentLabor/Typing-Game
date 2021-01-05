// const http = require("https");

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

let easy = [
  "When my days have come to an end, you shall be king",
  "Don't fight here! You'll ruin the flowers!",
  "A promise is a promise.",
  "Words aren't the only way to tell someone how you feel.",
];
let medium = [
  "My son. The day you were born the very forests of Lordaeron whispered the name..... Arthas",
  "I made it this far, believing in the memories we shared. This isn't happening! It's too cruel!",
  "Humans only look at appearances, anyway. Any way you look at it, I'd say I make a fine human being.",
  "Hi, Cloud. This is Cait Sith. I overheard the whole story! Don't forget about me. Everything you said makes perfect sense! You can use my stuffed body for the future of the Planet.",
];
let hard = [
  "You said that your warchief was in trouble - that the Horde needed the tauren once again. Well, Thrall did much for us in his time, and we will not fail him. My warriors will rendezvous with the warchief upon the battlefield",
  "It’s Like This Train. It Can’t Run Anywhere Except Where Its Rails Take It.",
  "The Shinra Electric Power Company isn't the real enemy. I promise you. There's a much bigger threat. I just want to do everything in my power to help. All of you - and the planet",
  "Something bothers me. I think it's your way of life. You don't get paid. You don't get praised. Yet, you still risk your lives and continue on your journey. Seeing that makes me... it just makes me think about my life.",
];

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

let randomizer = () => {
  return Math.floor(Math.random() * 5);
};

//This changes words depending on diffilculty selected
let chosenDifficulty = (diff) => {
  if (diff === "Easy") {
    wordToBeTyped.innerHTML = easy[randomizer()];
  } else if (diff === "Medium") {
    wordToBeTyped.innerHTML = medium[randomizer()];
  } else {
    wordToBeTyped.innerHTML = hard[randomizer()];
  }
};

//Checks what difficulty is selected and shows diff HTML based on difficulty selected
diffSetting.addEventListener("submit", (e) => {
  e.preventDefault();
  clearWindow();
  //have to add parameter of chosen diff value.
  chosenDifficulty(actualDiff.value);
  textBar.removeAttribute("hidden");
  textBar.focus();
  // returnToHomeTimer();
});

let areWordsCorrect = (userTxt, txtTobeTyped) => {
  let charVal = 0;

  for (let i = 0; i < userTxt.length; i++) {
    if (userTxt[i] === txtTobeTyped[i]) {
      // wordToBeTyped.style.color = "green";
      charVal++;
      span.innerHTML =
        '<span class="green">' + userTxt.substring(0, charVal) + "</span>";
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
});
