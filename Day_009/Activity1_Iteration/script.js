//WRITE YOUR CODE BELOW
const studentNames = ['Faisal Nour', 'Laszlo Czako', 'Max Hammed', 'Mischa Dabrowski', 'Rob Ranieri'];

const greetEveryone = (names) => {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

greetEveryone(studentNames);