// var userName = prompt("Hello. What is your name?");
// alert("Well hi there, " + userName);
// console.log("Sneaky bastard, " + userName + " is.");
//
// function echo(str, count) {
//   for (var i = 0; i < count; i++) {
//     console.log(str);
//   }
// }
//
// echo("Echo!!!", 10);
// echo("Tater Tots", 3);
function average(scores) {
  var avg = 0;
  for (var i = 0; i < scores.length; i++) {
    avg += scores[i];
  }
  console.log(Math.round(avg / scores.length));
}

var grades = [90, 98, 89, 100, 100, 86, 94];
var grades2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

average(grades);
average(grades2);
