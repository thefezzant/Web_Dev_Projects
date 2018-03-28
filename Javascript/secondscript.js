var firstName = prompt("What's your first name?");
var lastName = prompt("What's your last name?");
var age = prompt("How old are you?");
var fullName = firstName + " " + lastName;
var days = (age * 365) + " days";

//alert("Well, " + fullName + ", it's nice to meet you." );
console.log("Hey " + fullName + "!");

//alert("How does it feel to be " + age + "?");
console.log(age + " is a fine age.");
console.log("You've been alive for about " + days);
