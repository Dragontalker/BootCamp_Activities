(function () {
    console.log("Hellooo, Node!")
})();

// Trying to log window to console:
(function () {
    console.log(window);
})()
// Output: 
// C:\Users\Ricahrd\Desktop\GitHubRepos\BootCamp_Activities\Month2_BackEnd\Day01_Feb06\M9A2_HelloNode\index.js:6
//     console.log(window);
//                 ^

// ReferenceError: window is not defined
//     at C:\Users\Ricahrd\Desktop\GitHubRepos\BootCamp_Activities\Month2_BackEnd\Day01_Feb06\M9A2_HelloNode\ind
// ex.js:6:17
//     at Object.<anonymous> (C:\Users\Ricahrd\Desktop\GitHubRepos\BootCamp_Activities\Month2_BackEnd\Day01_Feb0
// 6\M9A2_HelloNode\index.js:7:3)


// Attmpt to log prompt, alert, and confirm will result the same undefine error since they are contained in window object.