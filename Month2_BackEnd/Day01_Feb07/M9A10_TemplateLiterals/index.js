// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: "Beat it",
  artist: "Micheal Jackson",
  album: "Best of Micheal Jackson"
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
    <h1>The title of music is ${music.title}</h1>
    <h2>The artist who perfomed this music is ${music.artist}</h2>
    <h3>The must is from album ${music.album}</h3>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

