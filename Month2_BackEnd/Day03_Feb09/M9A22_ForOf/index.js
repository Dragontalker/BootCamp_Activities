// Calling from DOM
const songs = document.querySelectorAll("ul > li");

console.log(songs);
console.log(songs[0].classList);

for (const song of songs) {
    song.classList.add("green");
}

// Check if it works:
console.log(songs[0].classList);