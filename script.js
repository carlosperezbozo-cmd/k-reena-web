const HERO_VIDEO_ID = "zXmUD2L6p2Y";

const soundToggle = document.getElementById("soundToggle");
const soundLabel = document.getElementById("soundLabel");
const iframe = document.querySelector(".hero-video iframe");
let soundOn = false;

function setHeroVideo(muted) {
  if (!iframe) return;
  iframe.src = `https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=${HERO_VIDEO_ID}&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`;
}

soundToggle?.addEventListener("click", () => {
  soundOn = !soundOn;
  setHeroVideo(!soundOn);
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
