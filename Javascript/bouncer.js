var age = Number(prompt("How old are you?"));

if (age % 2 !== 0) {
  console.log("Your age is odd!");
}
if (age === 21) {
  console.log("Happy 21st birthday!");
}
if (age < 0) {
  console.log("Sorry, that's not a valid age.");
}
// if ()
else if (age < 18) {
  console.log("Sorry, you're too young for this club.");
}
else if (age < 21) {
  console.log("You can go in, but you can't drink.");
}
else {
  console.log("You can go in and drink.");
}
