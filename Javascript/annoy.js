var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") < 0) {
  answer = prompt("Are we there yet?");
}
alert("We Made it!");
