const rollsList = document.querySelector("#diceDisplayBox");
// var rollsListItems = document.querySelectorAll(".dice");

function populateSelects() {

  let $sideSelect = $("#numOfSides");
  for (i=2;i<=12;i+=2){
    $sideSelect.append($('<option></option>').val(i).html(i));
  }
  $sideSelect.append($('<option></option>').val(20).html(20));
  let $numSelect = $("#numOfDice");
  for (i=1;i<=20;i++){
    $numSelect.append($('<option></option>').val(i).html(i));
  }
}

$( "#diceDisplayBox" ).on( "click", ".dice", function() {
  $("#diceDisplayBox li").removeClass("diceSelected");
  (this).classList.toggle("diceSelected");
});

function newDiceRoll() {
  let newLi = document.createElement("li");
  newLi.innerHTML = rollContentBuilder();
  newLi.classList.add("dice")
  if (rollsList.childElementCount < 9) {
    document.getElementById("diceDisplayBox").appendChild(newLi);
  } else {
    rollsList.removeChild(rollsList.firstChild);
    document.getElementById("diceDisplayBox").appendChild(newLi);
  }
}

document.querySelector("#diceBtn").addEventListener("click", function(){
  newDiceRoll();
  // document.querySelector("#modifier").value = "";
});

document.querySelector("#clearBtn").addEventListener("click", function (){
  rollsList.innerHTML = "";
});

function rollDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollContentBuilder(){
  let d = Number(document.querySelector("#numOfDice").value);
  let s = Number(document.querySelector("#numOfSides").value);
  let m = Number(document.querySelector("#modifier").value);
  let rolls = [];
  for (var i = 0; i < d; i++) {
    rolls.push(rollDice(1,s));
  }
  let rollTotal = rolls.reduce(function(a, b) { return a + b; }, 0);
  let resultStr = d + "d" + s + " [" + rolls + "] ";
  if (m) {
    rollTotal += m;
    resultStr += "+ " + m + " = " + "<span class='rollTotal'>" + rollTotal + "</span>";
  } else {
    resultStr += "= " + "<span class='rollTotal'>" + rollTotal + "</span>";
  }
  return resultStr;
  rolls = [];
}
