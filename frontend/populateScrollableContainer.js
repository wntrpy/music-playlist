
document.addEventListener("DOMContentLoaded", () => {
  const modalContainer = document.querySelector(".modal-card-scrollable-container");
  const infoModal = document.querySelector("#information-modal");
  const titleElement = infoModal.querySelector("h3");
  const artistElement = infoModal.querySelector("p");
  let isClicked = false;
  const addSongButton = document.getElementById('addSongButton'); //need ma disable to para di nag ooverlap yung modals
  const closeModal = document.getElementById('closeModal');


  // Fetch data sa php na nag perform ng selection
  fetch("/wst-last-task/backend/fetch_music.php")
  .then(response => response.json())
  .then(data => {
  modalContainer.innerHTML = ""; // clear content (template)
  data.forEach(song => {

  const modalCard = document.createElement("div"); //create card
  modalCard.classList.add("modal-card");

  modalCard.innerHTML = `
    <div class="song-info-container">
      <div>
      </div>
      <div>
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
      </div>
    </div>
  `;

  modalCard.addEventListener('click', () => {
    isClicked = !isClicked;
    if(isClicked){
      infoModal.style.display = "block";
      titleElement.textContent = song.title;
      artistElement.textContent = song.artist;
      addSongButton.style.pointerEvents = "none"; //disable add form modal
      closeModal.style.pointerEvents = "none";
    }
    else{
      infoModal.style.display = "none";
      addSongButton.style.pointerEvents = "auto"; //enable add form modal
      closeModal.style.pointerEvents = "auto";
    }
  });

    //add card sa container
    modalContainer.appendChild(modalCard);
  });
  })
  .catch(error => {
  console.error("Error fetching music data:", error);
  });
});

