document.addEventListener('DOMContentLoaded', () => {
  const cdDisc = document.getElementById('cdDisc');
  const playButton = document.getElementById('playButton');
  const modal = document.getElementById('modal');
  const addSongButton = document.getElementById('addSongButton');
  const closeModal = document.getElementById('closeModal');

  const addForm = document.getElementById('add-song-form');
  const closeAddForm = document.getElementById('closeAddForm');

  let isPlaying = false;

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
    modal.style.display = "block"; //open modal
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = "none"; //close modal
  });

  addSongButton.addEventListener('click', () => {
    addForm.style.display = "block"; //open add form

    modal.style.pointerEvents = "none"; //disable modal
  });

  closeAddForm.addEventListener('click', () => {
    addForm.style.display = "none"; //close add form
    modal.style.pointerEvents = "auto"; //enable modal

  });


});
