let diffSetting = document.getElementById("difficultySetting");
let difftext = document.getElementById("diffText");
let textBar = document.getElementById("textInput");


let removeDiffText = () =>{
    difftext.innerHTML = ""
}

diffSetting.addEventListener('submit',e=>{
    e.preventDefault();
    console.log("difficulty has been selected");
    //If this difficulty is selected say this for all 3 versions 
    //to ensure i make it with 3 versions. This to then become
    // referring to functions that play specific words. 
    difftext.innerHTML = "";
    diffSetting.innerHTML ="";
    textBar.removeAttribute("hidden");
})