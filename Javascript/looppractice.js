//// WHILE LOOPS ////
//
// console.log("Print all nums between -10 and 19");
// //
// var nums = -10;
// while (nums <= 19) {
//   console.log(nums);
//   nums++;
// }
//
// console.log("Print all evens from 10 to 40");
// //
// var evens = 10;
// while (evens <= 40) {
//   console.log(evens);
//   evens += 2;
// }
//
// console.log("Print all odds from 300 to 333");
// //
// var odds = 301;
// while (odds <= 333) {
//   console.log(odds);
//   odds += 2;
// }
//
// console.log("Print all nums divisible by 5 AND 3 between 5 and 50");
// //
// var complex = 5;
// while (complex <= 50) {
//   if (complex % 5 === 0 && complex % 3 === 0) {
//     console.log(complex);
//   }
//   complex++;
// }

//// FOR LOOPS ////
console.log("Print all nums between -10 and 19");
//
for(var i = -10; i <=19; i++) {
  console.log(i);
}

console.log("Print all even nums between 10 and 40");
//
for(var i = 10; i <=40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Print all odd nums between 300 and 333");
//
for(var i = 300; i <=333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("Print all etc");
//
for(var i = 5; i <=50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}
