const soundToggle = document.getElementById("soundToggle");
const soundLabel = document.getElementById("soundLabel");
const iframe = document.querySelector(".hero-video iframe");
let soundOn = false;
soundToggle?.addEventListener("click", () => {
  soundOn = !soundOn;
  const base = "https://www.youtube-nocookie.com/embed/02yVcc5XkD8";
  iframe.src = `${base}?autoplay=1&mute=${soundOn ? 0 : 1}&controls=0&loop=1&playlist=02yVcc5XkD8&modestbranding=1&rel=0&playsinline=1`;
  soundLabel.textContent = soundOn ? "SILENCIAR" : "SONIDO";
  soundToggle.setAttribute("aria-label", soundOn ? "Silenciar video" : "Abrir video con sonido");
});
const nav = document.getElementById("nav");
let lastY = 0;
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  nav.style.opacity = y > lastY && y > 120 ? "0" : "1";
  nav.style.pointerEvents = y > lastY && y > 120 ? "none" : "auto";
  lastY = y;
}, {passive:true});
