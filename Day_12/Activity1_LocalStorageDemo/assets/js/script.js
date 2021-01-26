var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");
function setCounter( newCount ){
  document.querySelector("#counter").innerText = newCount
  localStorage.count = newCount
}
// var count = localStorage.getItem("count");
// gets the remembered counter
var count = localStorage.count
setCounter( count )
addButton.addEventListener("click", function() {
  if (count < 24) {
    count++
    setCounter( count )
  }
});
subtractButton.addEventListener("click", function() {
  if (count > 0) {
    count--
    setCounter( count )
  }
});