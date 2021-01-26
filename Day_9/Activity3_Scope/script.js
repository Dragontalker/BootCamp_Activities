// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
function justShout() {
  console.log(shout + ", " + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
}

let shout = "Hello World!!!!";
justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  var animal = "Lions"; 
  console.log(animal);
  return;
}

function sayTigers() {
  let animal = "Tigers";
  console.log("and " + animal + " and "); 
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!". 
const bears = "Bears";

function sayBears() {
    console.log(bears + "! OH MY!");
    return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.
function singAlong() {
  let sing = "Sing"; 
  console.log(sing + ",");
  var singASong = function () {
    console.log(sing + " a Song.");
  };
  singASong();
}

singAlong();

//Bonus Activity.
var bigOne = "big";

function f1() {
  var fn1_var = "fn1";
  (function babyFn() {
    var babyFn_var = "baby";
    console.log(`[bigOne]${bigOne} [babyFn] babyFn_var${babyFn_var} fn1_var${fn1_var}.`);
  })()
  // This one won't work.
  console.log(`[bigOne]${bigOne} [babyFn] babyFn_var${babyFn_var} fn1_var${fn1_var}.`);
}

f1();
