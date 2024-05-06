// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  
  // get all of the aspects from the html and the synthisizer
  // init the speech synthisizer
  const synth = window.speechSynthesis;
  // button
  const talkButton = document.querySelector("button");
  // text box
  const talkTextBox = document.querySelector("textarea")
  // image
  const talkImage = document.querySelector("img");
  // dropbox
  const talkSelection = document.querySelector("select");

   // adds all available voices to the dropbox
   populateVoiceList();
   if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
   ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
   }

   // speaks when the button is clicked
   

   // if speaking then change the image to the speaking image
 }
 
 function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }
 
  const voices = speechSynthesis.getVoices();
  const talkSelection = document.querySelector("select");
 
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = voices[i].name;
    talkSelection.appendChild(option);
  }
}