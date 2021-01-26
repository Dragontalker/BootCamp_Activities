// var site1El = document.querySelector(".site1");
// var site2El = document.querySelector(".site2");
// var site3El = document.querySelector(".site3");

// site1El.children[0].textContent = "Site 1";
// site1El.children[1].setAttribute("href", "https://google.com");
// site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
// site1El.children[1].children[0].setAttribute("alt", "man working");
// site1El.children[1].children[0].setAttribute("style", "padding:10px;");

// site2El.children[0].textContent = "Site 2";
// site2El.children[1].setAttribute("href", "https://twitter.com");
// site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
// site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
// site2El.children[1].children[0].setAttribute("style", "padding:10px;");

// site3El.children[0].textContent = "Site 3";
// site3El.children[1].setAttribute("href", "https://instagram.com");
// site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
// site3El.children[1].children[0].setAttribute("alt", "women working");
// site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below
var list =  [
    {title: "Google", icon: "./assets/images/image_1.jpg", url: "https://google.com"},
    {title: "Instagram", icon: "./assets/images/image_2.jpg", url: "https://twitter.com"},
    {title: "Twitter", icon: "./assets/images/image_3.jpg", url: "https://twitter.com"}
]

// Solution for Task 1.
for (let i = 0; i < list.length; i++) {
    let site = document.querySelector(".site" + (i + 1));
    // heading h4
    site.children[0].textContent = list[i].title;
    // Link a
    site.children[1].href = list[i].url;
    // Link child image jpg
    site.children[1].children[0].src = list[i].icon;
}

// Solution for Task 2.
document.querySelector('h1').style = 'padding-left: 10px; margin: 0;';
