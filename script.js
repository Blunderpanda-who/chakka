/* 🎵 MUSIC */
const songs = [
  "music/rtc.mp3",
  "music/high-on-you.mp3",
  "music/chaandni.mp3"
];

let audio = new Audio();
audio.volume = 0.7;

function startMusic() {
  audio.src = songs[0];
  audio.play();
}

function playSong(i) {
  audio.pause();
  audio.src = songs[i];
  audio.load();
  audio.play();
}

/* 💜 THEME TOGGLE */
function toggleTheme() {
  document.body.classList.toggle("purple");
  document.body.classList.toggle("pink");
}

/* ❄️ SNOWFALL */
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

for (let i = 0; i < 100; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() * 1
  });
}

function drawSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let f of snowflakes) {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  }
  ctx.fill();
  moveSnow();
}

function moveSnow() {
  for (let f of snowflakes) {
    f.y += Math.pow(f.d, 2) + 1;
    if (f.y > canvas.height) {
      f.y = 0;
      f.x = Math.random() * canvas.width;
    }
  }
}

setInterval(drawSnow, 25);
