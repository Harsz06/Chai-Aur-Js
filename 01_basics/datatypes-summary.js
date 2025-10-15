// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLogged = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 3778884568276236463n;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myobj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof anotherId);

// +++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive): This gives copy, Heap (Non-Primitive): This is gives reference

let myYoutubename = "hiteshchoudharydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);

