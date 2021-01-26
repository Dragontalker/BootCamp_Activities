var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift("Canis Major");
planets.pop();
const galaxy = constellations.concat(planets);
const capStar = star.toUpperCase();

console.log(constellations);
console.log(planets);
console.log(capStar);