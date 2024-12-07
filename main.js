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


   // fetch lyrics using the PHP backend
   async function fetchLyrics(songTitle, artistName, lyricsContainer) {
    try {
        const response = await fetch(
            `/wst-last-task/backend/fetch_lyrics.php?songTitle=${encodeURIComponent(songTitle)}&artistName=${encodeURIComponent(artistName)}`
        );
        const data = await response.json();

        if (data.status === "success") {
            lyricsContainer.innerHTML = `<p>Lyrics are available at: <a href="${data.songURL}" target="_blank">${data.songURL}</a></p>`;
        } else {
            lyricsContainer.innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error("Error fetching lyrics:", error);
        lyricsContainer.innerHTML = "<p>Error fetching lyrics.</p>";
    }
}

const songCards = document.querySelectorAll(".modal-card");
songCards.forEach((songCard) => {
    const title = songCard.querySelector("h3").textContent;
    const artist = songCard.querySelector("p").textContent;
    const lyricsContainer = document.querySelector(".lyrics-container");

    songCard.addEventListener("click", () => {
        lyricsContainer.innerHTML = "<p>Loading lyrics...</p>";
        fetchLyrics("Soft Spot", "keshi", lyricsContainer);
    });
});