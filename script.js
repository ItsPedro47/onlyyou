const quotes = [
  "You make my ordinary days feel magical ✨",
  "With you, even silence feels warm 💕",
  "My favorite place is wherever you are 💖",
  "You are my happy thought 🌸",
  "Every moment with you feels special 💫"
];

let quoteIndex = 0;

function openHeart() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");
}

function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
}

function rotateQuotes() {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  document.getElementById("quoteText").textContent = quotes[quoteIndex];
}

setInterval(rotateQuotes, 3000);

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
