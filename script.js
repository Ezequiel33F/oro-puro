const btn = document.getElementById("btnVideo");
const video = document.getElementById("videoContainer");

btn.addEventListener("click", () => {
  video.classList.toggle("oculto");

  if (video.classList.contains("oculto")) {
    btn.textContent = "Ver video nivel D10S";
  } else {
    btn.textContent = "Ocultar video";
  }
});
