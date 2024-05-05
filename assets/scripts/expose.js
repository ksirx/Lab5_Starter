// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // initialize the confetti object
  const jsConfetti = new JSConfetti();

  // handles selecting a horn from the drop down image
  const selectHorn = document.getElementById('horn-select');
  selectHorn.addEventListener('change', changeHorn);

  // handles the changing of the voluem slider
  const volumeLevel = document.getElementById('volume');
  volumeLevel.addEventListener('change', changeVolume);

  // handles when the play button is clicked
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', playSound);
  playButton.addEventListener('click', function() {
    // gets the selected horn
    const horn = document.getElementById('horn-select');

    // if the party horn is selected, then the confetti will be displayed
    if (horn.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}

// the functionality for slelecting a horn in the drop down menu
function changeHorn() {
  // gets access to the image and audio elements of the html
  let hornImage = document.querySelector('img');
  let hornAudio = document.querySelector('audio');

  // gets the value for the selected horn
  const horn = document.getElementById('horn-select').value;
  
  // make changes based on value of the selected horn
  if (horn == 'air-horn') {
    hornImage.src = 'assets/images/air-horn.svg';
    hornAudio.src = 'assets/audio/air-horn.mp3';
  }
  else if (horn == 'car-horn') {
    hornImage.src = 'assets/images/car-horn.svg';
    hornAudio.src = 'assets/audio/car-horn.mp3';
  }
  else if (horn == 'party-horn') {
    hornImage.src = 'assets/images/party-horn.svg';
    hornAudio.src = 'assets/audio/party-horn.mp3';
  }
}

// the functionality for using the slider to change the volume level
function changeVolume() {
  // gets the volume level and the volume image
  const volumeLevel = document.getElementById('volume').value;
  let volumeImage = document.querySelector('div img');

  // gets access to the audio element
  let hornAudio = document.querySelector('audio');

  // changes the actual actual volume level
  hornAudio.volume = volumeLevel / 100;

  // changes the image based on the volume level
  if (volumeLevel == 0) {
    volumeImage.src = 'assets/icons/volume-level-0.svg';
  }
  else if (volumeLevel < 34) {
    volumeImage.src = 'assets/icons/volume-level-1.svg';
  }
  else if (volumeLevel < 67) {
    volumeImage.src = 'assets/icons/volume-level-2.svg';
  }
  else {
    volumeImage.src = 'assets/icons/volume-level-3.svg';
  }
}

// the functionality for using the button to play the sound
function playSound() {
  // gets access to the audio element
  let hornAudio = document.querySelector('audio');
  hornAudio.play();
}