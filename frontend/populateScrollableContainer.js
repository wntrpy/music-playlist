
document.addEventListener("DOMContentLoaded", () => {
  const modalContainer = document.querySelector(".modal-card-scrollable-container");
  const infoModal = document.querySelector("#information-modal");
  const titleElement = infoModal.querySelector("h3");
  const artistElement = infoModal.querySelector("p");

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
          <img src="img/backtodecember.png" alt="" />
      </div>
      <div>
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
      </div>
    </div>
  `;

    // Add event listener to display song details on click
    modalCard.addEventListener("click", () => {
      titleElement.textContent = song.title;
      artistElement.textContent = song.artist;

    });

    //add card sa container
    modalContainer.appendChild(modalCard);
  });
  })
  .catch(error => {
  console.error("Error fetching music data:", error);
  });
});

