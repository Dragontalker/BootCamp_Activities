// Access element using id
var articlesDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");

// Change style by accessing style object's properties
//Task 1:
articlesDiv.children[0].style.fontSize = "50px";

// Or, get it directly:
document.body.children[0].children[0].style.color = "white";

//Task 2:
mainDiv.children[0].style.backgroundColor = "white";

// Or, get it directly:
document.body.children[1].children[0].children[1].style.fontSize = "50px";

// Bonus: manipulating the attribute within tag.

// Bad practice, this will overwrite the exitsting style.
document.querySelector('.artTitle').setAttribute('style', "color: purple; font-size: 50px;");

// Try this
document.querySelector('.artTitle').style("color: purple; font-size: 50px;");