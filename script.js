// sound functions

let modal_open = false


// Function to play individual sound when hovered

function playSound(soundId) {
  if (modal_open === true) return
  // Pause all sounds
  const sounds = document.getElementsByTagName('audio');
  for (let i = 0; i < sounds.length; i++) {
      sounds[i].pause();
      sounds[i].currentTime = 0;
  }
  // Play the selected sound
  const sound = document.getElementById(soundId);
  sound.play();
}

// Function to play all sounds initially
window.onload = function() {
  const sounds = document.getElementsByTagName('audio');
  for (let i = 0; i < sounds.length; i++) {
      sounds[i].play();
  }
};

// Function to stop all sounds when mouse leaves sound element
function stopSound() {
  if (modal_open === true) return


  const sounds = document.getElementsByTagName('audio');
  for (let i = 0; i < sounds.length; i++) {
      sounds[i].pause();
      sounds[i].currentTime = 0;
  }
  // Play all sounds again
  window.onload();
}


//MODAL (popup windows)

// Function to open the modal and play corresponding audio
function openModal(text, audioId) {
  let modal=document.querySelector("#"+text)
  modal.style.display = "block";
  modal_open = true
}

// Function to close the modal
function closeModal(text) {
  modal_open = false
  
  console.log("ok")
  let modal=document.querySelector("#"+text)
  modal.style.display = "none";
}