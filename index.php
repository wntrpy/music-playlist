<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WST LAST TASK</title>
    <link rel="stylesheet" href="/wst-last-task/index.css" />
    <link rel="stylesheet" href="/wst-last-task/styles/general.css" />
    <link rel="stylesheet" href="/wst-last-task/styles/modal.css" />
    <link rel="stylesheet" href="/wst-last-task/styles/information-modal.css" />
  </head>
  <body>
    <div class="container">
      <div class="cd-container">
        <div class="cd-glow"></div>

        <!-- CD Disc -->
        <div id="cdDisc" class="cd-disc">
          <div class="cd-center">
            <div class="cd-label">
              <span>aespa</span>
            </div>
          </div>
        </div>

        <!-- Play Button -->
        <button id="playButton" class="play-button">
          <div class="play-icon">▶</div>
        </button>
      </div>

      <!-- Popup -->
      <div id="modal" class="modal">
        <div class="modal-content">
          <h2>Moses's Top Songs of 2024</h2>

          <!--Song Scrollable Container-->
          <div class="modal-card-scrollable-container">
            <!--MODAL SONG CARD-->
            <div class="modal-card">
              <div class="song-info-container">
                <div>
                  <img src="img/backtodecember.png" alt="" />
                </div>

                <div>
                  <h3>Back to December (Taylor's Version)</h3>
                  <p>Taylor Swift</p>
                </div>
              </div>
            </div>

          </div>

          <button id="closeModal" class="close-button">x</button>
        </div>

        <!--INFORMATION MODAL-->
        <div id="information-modal">
          <div class="first-row">
            <img src="img/backtodecember.png" alt="" />
            <div class="info-and-buttons">
            <div>
              <h3>Back to December (Taylor's Version)</h3>
              <p>Taylor Swift</p>
            </div>
            <div class="button-container">
              <button class="editBtn">Edit</button>
              <button class="deleteBtn">Delete</button>
            </div>
            </div>
          </div>

          <div class="lyrics-container">
            
          </div>
        </div>
      </div>
    </div>
    <script src="main.js"></script>
    <script src="/wst-last-task/frontend/populateScrollableContainer.js"></script>
  </body>
</html>
