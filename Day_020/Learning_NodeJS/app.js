function sayHello(name) {
    console.log('Hello ' + name);
}


console.log(); // Console is a global object.

// Global objects available both in browers and node
setTimeout();
clearTimeout();
setInterval();
clearInterval();

// Window and global has different scope
// In brower, global variables are stored under window object.
// However, in node, global.message won't work, different scope.
var message = '';

console.log(global.message);