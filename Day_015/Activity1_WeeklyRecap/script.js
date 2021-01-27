// Show local storage at refresh
const myName = document.getElementById("myName");
const myLocation = document.getElementById("myLocation");

if (localStorage.myName)
    myName.value = localStorage.myName;
if (localStorage.myLocation)
    myLocation.value = localStorage.myLocation;


const showTime = () => {
    console.log('time is : ', new Date());
}

// Tells the time, wait 5s, then runs again
showTime(); 
setTimeout(showTime, 5000)

// When function is called, d-none class is removed, therefore the content is showing.
const showPopup = () => {
    let popup = document.getElementById("popup");
    popup.classList.remove("d-none");
}

// Furthermore, there is a toggel method let us to the toggle feature.
const togglePopup = () => {
    let popup = document.getElementById("popup");
    popup.classList.toggle("d-none");
}

// Set a timeout here to let the content show/dispear in a time interval;
// setTimeout(togglePopup, 1000);
// setTimeout(togglePopup, 2000);
// setTimeout(togglePopup, 3000);

// Use set interval to repeat function by a frequency.
// const myInterval = setInterval(togglePopup, 1000);

// // Use clear interval to stop set interval.
// clearInterval(myInterval);

const showError = (error) => {
    let popup = document.getElementById("popup");
    popup.innerText = error;
    popup.classList.remove("d-none");
}

const submitForm = (event) => {
    event.preventDefault()

    // Dataset contains error, length and other information.
    const nameData = myName.dataset;
    const locationData = myLocation.dataset;

    if (!myName.value || myName.value.length > nameData.length) {
        showError(nameData.error);
        return;
    } else if (!myLocation.value || myLocation.value.length > locationData.length ) {
        showError(locationData.error);
        return;
    }
    
    console.log(`Successfully entered ${myName.value} , at ${myLocation.value}`);

    // Save this to local stroage.
    localStorage.myName = myName.value;
    localStorage.myLocation = myLocation.value;
}
