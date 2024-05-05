// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // handles available voices on load
  const selectVoice = document.getElementById("voice-select");
  selectVoice.addEventListener('load', getVoice);

  // handles the case when the button is pressed
  const speakButton = document.querySelector("button");
  speakButton.addEventListener('click', speakVoice);
}

// gets all avalable voices on platform and make it an option in the dropdown
function getVoice() {
  // initialize the API and rthe soon to be array of available voices
  const synth = window.speechSynthesis;
  let voices = [];

  // get the available voices and put into array
  voices = synth.getVoices();

  // gets access to the dropbox options
  let option = document.querySelector("value");

  // iterate through all avalable voices and make them dropbox options
  for (let i = 0; i < voices.length; i++) {
    const voice = document.createElement("option");
    
  }
}

// when the button is pressed, the synth will speak whatever is in the textbox and image will reflect speaking
function speakVoice() {
  // creates an instance of synth and gets all needed values from html (image and textbox)
  const synth = window.SpeechSynthesis;
  let image = document.querySelector("img");
  let text = document.querySelector("textarea");



}

