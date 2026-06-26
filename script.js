const video = document.getElementById("wildlifeVideo");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (video.paused) {
    // Not playing: make sure it is visible and play it
    video.hidden = false;
    video.play();
  } else {
    // Currently playing: hide it
    video.hidden = true;
    video.pause();
  }
});

// Keep the button label in sync with the video state
function updateLabel() {
  toggleBtn.textContent = video.paused ? "Play video" : "Hide video";
}

video.addEventListener("play", updateLabel);
video.addEventListener("pause", updateLabel);
updateLabel();
