// alert()
// pops up a browser alert (with an ok button, from browser)
// useful for testing values and JS without needing to build HTML to house the output

alert("WATCH OUT!");
alert(300 + 500);

// prompt()
// gets input from user in a popup similar to alert()
// not great in production, mostly for testing

prompt("Enter number of cats.");
var userName = prompt("What is your username?");


// console.log() //
// prints something to the JS console in the browser

console.log("Secret documents!");

// boolean operators //
// in addition to usual <, >, ==, !=, etc. there are two other
// important JS boolean operators:

// === and !==
// same as ==, but checks for data TYPE as well as value

var y = 99;
y == "99"; // true because of 'Type Coercion', or JS attempting to compare differnt data types
y === "99"; // false (strings not equal to numbers)
y !== "99"; // true

// AND, OR, and NOT //
var x = 5;
// AND = &&
x < 10 && x !== 5; // false (this can also be written without any spaces, or x<10&&x!==5;)

// OR = ||
x > 9 || x === 5; // true

// NOT = !
!(x === 10); // true


// JS assigns "truthiness" and "falsiness" to all data values
// everything is inherently truthy except the following:

false
0
"" // empty string
null
undefined
NaN

// IF, ELSE IF, and ELSE

if (age < 18) {
  console.log("Sorry, you're too young for this club.");
}
else if (age < 21) {                              // mentioning 18 is not necessary because
  console.log("You can go in, but you can't drink.");    // this code only runs if age >= 18 by virtue of if/else if
}
else {
  console.log("You can go in and drink.");
}

// DRY code: Don't Repeat Yourself
// not repeating/duplicating written code unnecissarily.
// Use loops to reduce lines, use better variables, etc
// Aim for DRY code

var count = 1;

while (count < 6) {
  console.log("count is: " + count);
  count++; // ++ adds one, += x adds x, same with -- and -=
}

//
var str = "hello";
var count = 0;

while (count < str.length) {
  console.log(str[count]);
  count++;
}

// .indexOf()
// searches for index of a given variable in another given variable
// THING_TO_BE_SEARCHED.indexOf(THING_SEARCHING_FOR);
// returns the index when matched, else returns -1

var str = "hello world";
str.indexOf("h"); // 0
str.indexOf("e"); // 1
str.indexOf("l"); // 2 <--- only shows first instance of substring
str.indexOf("world"); // 6 <-- shows first index of whole match
str.indexOf("yes"); // -1

// FOR loops
for(init; condition; step) {
  //code
}
// counting 1 through 5 with a For loop:
//   init variable  condition  iteration
for (var count = 1; count < 6; count++) {
  console.log(count);
}
// spelling out a string:
var str = "hello"
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//// FUNCTIONS ////
// Declaration
function doSomething() {
  //code
}
doSomething() //runs the code
doSomething // returns the code

function multi(x, y) { // multiple arguments are comma-separated
  console.log(x * y)
}
multi(4,3); // prints 12 to console

// Function Expression
var capitalize = function(str) {
  return str.charAt(0).toUppercase() + str.slice(1);
}
//can't rename var 'capitalize' without loosing function definition

//// ARRAYS ////
// like python, bracketed, ordered lists
var firstArray = []; //empty array
firstArray[0] = "red"; // adds red to the array in the 0-index position
firstArray[4] = "blue"; // adds blue to the 10-index position, filling all missing positions with undefined

// for nested (or 2-dimentional) arrays:
nestArray[0][3]; // grabs the 4th item from the 1st array in nestArray

var nextArray = [1, 2, 3];
nextArray.push(4); // adds value in () to end of array: [1, 2, 3, 4]
nextArray.pop(); // pops the last item from the array (returns it): [1, 2, 3]

nextArray.unshift(0); // adds value in () to BEGINNING of array: [0,1,2,3]
nextArray.shift();    // removes first value, returns it (like .pop() for beggining of array)

nextArray.indexOf(2); // returns the index for the value in (). only gives first instance, returns -1 if item not present

var foodArray = ["apple", "banana", "mango", "orange", "cherry"];
foodArray.slice(1, 3); // takes a slice from first arg through second arg (non inclusive of second)
// does not alter original array, returns an array object of the requested slice ( ["banana", "mango"] )
var fruitArray = foodArray.slice(); // duplicates entire array into a new variable

// iterating with FOR loops

for (var i = 0; i < array.length; i++) {
  some.method(array[i]);
}

// forEach

arrayName.forEach(function() {
  console.log("Inside the ForEach"); // this calls some undefined function() on each item in the named array
});                                  // in this case, the function is defined as console.logging the string "INSIDE THE FOREACH"

foodArray.forEach(function(fruit) { // assigns a variable "fruit" to each item in foodArray
  console.log(fruit);              // that variable can be used in the function, which is whatever code comes after
});                               // in this case, printing each "fruit" to the console

// above method is for defining function inline. To use other/predefined function:

foodArray.forEach(otherFunction); //forEach will automatically pass array items into function as arguments
// foodArray.forEach(function());  INCORRECT this way will call the function() before we're ready, INCORRECT
// forEach(current value, [index, array])  <-- 2nd and 3rd arguments are optional, but can be used to include/call them in code:

if (input === "list") {
  todos.forEach(function(todo, i) { // the i stores the index of the current value todo
    console.log(i + ": " + todo);  // the i can be used here to output the index ( i.e., '0: "todo item"'  )
  });
}

//// OBJECTS ////
// connects related data in an array-like setting. Gives more meaning/relationship to the connected data
var person = ["Cindy", 32, "Mountain View"]; // array form, data is together but not "connected"
person[2]; // gives the value, but code is not very meaningful, requires knowledge of indecies for random data

var person = {      // Object version. Curly braces, with key-value pairs inside
  name: "Cindy",    // unordered, like Python dictionaries
  age: 32,          // naming is more specific
  city: "Mountain View"
};

//can be called in two ways:
functionX(person["name"]); // like an array index call, but using key. Can be used with variables whose values are strings
functionX(person.name);   // dot notation. Cannot use if Key starts with number (ie, name.1stCity) or has a space (person.fave color)

// the above methods can be used to change their values, OR add new key/values
person.age += 1;
person.name = "Hanson";
person["city"] = "Missoula";
person.favColor = "red";

//  Arrays are just special objects, with a number as the key, and its value as the value, and it stays ordered
