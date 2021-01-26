// WRITE YOUR CODE HERE
const studentList = ["Lazlo Czako", "Richard Yang", "Sam Kim", "Jack Murphy"];

for (let i = 0; i < studentList.length; i++) {
    console.log(`Welcome to the class ${studentList[i]}!`);
}

const replaceStudent = (studentName) => {
    studentList.splice(0, 1, studentName);
}

const confirmReplacement = (studentName, list) => {
    if (list[0] === studentName) {
        console.log(`${studentName} is now in class.`);
    } else {
        console.log("The student is not in class.");
    }
}

