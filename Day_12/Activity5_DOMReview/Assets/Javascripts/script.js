// Get input from name
let myName = document.getElementById("name")

// Setting the name to another value
myName.value = "Tong";

function saveForm() {
    // Read the form;
    let userName = document.getElementById("name").value;
    let userLocation = document.getElementById("location").value;
    
    localStorage.form2 = userName + ',' + userLocation;
    localStorage.form = JSON.stringify({
        name: userName,
        location: userLocation
    })

    let addUpper = document.getElementById("upperCase").checked;
    let addLower = document.getElementById("lowerCase").checked;
    console.log()
}