// Dependencies
const express = require('express');

const app = express();
const PORT = 3000;

// Data
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Master',
    age: 55,
    forcePoints: 1350,
  },
];

// Routes

app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

// What does this route do?
app.get('/api/characters', (req, res) => {
  return res.json(characters);
});

// What does this route do?
app.get('/api/characters/:character', (req, res) => {
  // This line prints out the 'character' part of string from url into console.
  const chosen = req.params.character;
  console.log(chosen);

  // This line will check local data object to see if there is a matching from request.
  for (let i = 0; i < characters.length; i++) {
    const currentChar = characters[i];
    if (chosen === currentChar.routeName) {
      return res.json(currentChar);
    }
  }

  // If there is no matching found, return a 404 error.
  return res.status(404).send('No character found');
});

// Listener
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
