document.addEventListener('DOMContentLoaded', () => {
  const cdDisc = document.getElementById('cdDisc');
  const playButton = document.getElementById('playButton');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const infoModal = document.getElementById('information-modal');
  let isPlaying = false;
  let isClicked = false;

  // Toggle play/pause
  playButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      cdDisc.classList.add('spinning');
      playButton.querySelector('div').textContent = '⏸';
    } else {
      cdDisc.classList.remove('spinning');
      playButton.querySelector('div').textContent = '▶';
    }
    modal.style.display = "block";
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = "none";
  });

  modal.addEventListener('click', () => {
    isClicked = !isClicked;
    if(isClicked){
      infoModal.style.display = "block";
    }
    else{
      infoModal.style.display = "none";
    }

  });
});