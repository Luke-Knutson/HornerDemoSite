// Load the YouTube player only when the visitor clicks play.
// This keeps the initial page load lighter.
document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("play");
  const videoContainer = document.getElementById("vid");

  if (!playButton || !videoContainer) {
    return;
  }

  playButton.addEventListener("click", function (event) {
    event.preventDefault();

    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/lvXGmKw1vyg?autoplay=1";
    iframe.title = "Horner video";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    videoContainer.replaceChildren(iframe);
  });
});
