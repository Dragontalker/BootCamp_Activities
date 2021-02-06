var chosenPet = "Lulu";

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

//Debug the code below 
function dogMessage(dogName) {
    console.log(`Congrats! ${dogName}, a great dog, is available for adoption!`);
    shelter.apptMessage();
}

// Test: dogMessage function.
dogMessage("Machie");

function catMessage(catName) {
  console.log(`Congrats! ${catName}, an awesome cat, is available for adoption!`);
  shelter.apptMessage();
}

// Test: catMessage function.
catMessage("LuLu");

function petFinder (petName) {
  if (shelter.dogs.includes(petName)) {
    dogMessage(petName);
  } else if (shelter.cats.includes(petName)) {
    catMessage(petName);
  } else {
    console.log("It looks like the pet is not available.");
    console.log(`Check out our featured dog, ${shelter.dogs[0]}. or our featured cat, ${shelter.cats[1]}.`);
  }
}

//Test: petFinder function.
petFinder(chosenPet);
petFinder("Random Pet");
