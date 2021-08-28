// variable type

// var const let

// let
let sore = 18;
score = 18.5;
console.log(score);
// changed

// const
const fixNumber = 25;
console.log(fixNumber);
// work
// fixNumber = 24;
// notwork
// constant variable fix

// Array (array typeOf object)
let slectedFrouits = ["apple", "orange", 25];
// add banana
slectedFrouits[3] = "banana";
console.log(slectedFrouits);
// length
console.log(slectedFrouits.length);

// function
// parametr=> user
function name(user) {
  console.log(user + " " + "zareai");
}
// arguman:call=>mamad
name("mamad");

// function return
//  return pass out
function mix(a, b) {
  return a + b;
}
const result = mix(1, 2);
console.log(result);

// operation : ++Y Or Y++

function increment(y) {
  return ++y;
  //   return y++;
}
const inc = increment(2);
//(2)=> y++ return 2
//(2)=> ++y return 3

// assignment
// x++ => x=x+1

// equality

// ternary or Conditional operators
// if was UP 200 SALE20% .if was not5%
//cart >200 => discount 20% | 5%
const total = 220;
let discount = total > 200 ? "20%" : "5%";
console.log("your sale fore you" + discount);

// and && : return true if the both true
// or ||: return true if the one true
// not !: not true
const age = 25;
let isLoggedIn = true;
let isAcceptable = age > 18 && isLoggedIn;
console.log(isAcceptable);

// falsy
// 0
// " "
//null
//undified
//NaN
//false

// false||1||2 => return first True return 1

// let defaultColor="red"
// const chooseColor=selectedColor||defaultColor
// if choose =>selectedColor. if no Choose defaultColor
// if choose was null or false jump defaultColor

// chooseColor=selectedColor || defaultColor === chooseColor ? selectedColor : defaultColor; 

// || === ?(___):(__)    also equal

// exercise
// swpa variables
let a="red"
let b="blue"

// create c
let c=a
a=b
b=c //c=>blue
console.log(a,b)

