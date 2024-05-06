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

  // adds all available voices to the dropbox taken from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // speaks when the button is clicked
  talkButton.addEventListener('click', function() {
    // gets the text from the text area
    const utterThis = new SpeechSynthesisUtterance(talkTextBox.value);

    // watch for when start speaking to change image
    utterThis.addEventListener('start', function() {
      talkImage.src = "assets/images/smiling-open.png";
    });

    // watch for when end speaking to change image
    utterThis.addEventListener('end', function() {
      talkImage.src = "assets/images/smiling.png";
    });

    // gets the selected voice and sets the utterace to it
    const selectedOption = talkSelection.value;

    let voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    
    // speaks whats in the box
    synth.speak(utterThis);
  });
}
 
// function taken from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
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