var squares = document.getElementsByClassName('square-editable');
var playerButton = document.getElementById('playerBtn');
var npcButton = document.getElementById('npcBtn');
var updateButton = document.querySelector("#updateBtn");
var initClearButton = document.querySelector("#clearPlayers");
var inputs = document.getElementsByClassName("form-control");
var deleteButtons = document.querySelectorAll(".remove");
var selectedChars = document.querySelectorAll(".selectedLi");
var playerPieces = document.querySelectorAll("li.draggable");
var pickedColor = document.querySelector("#colorPicker").value;

// Add Player character to Initiative List
playerBtn.addEventListener("click", function(){
  // create an li element using the info provided by the user
  addChar();
  // set activeChars to the last li in the list of sortable li's
  var activeChars = document.querySelector("#sortable2 li:nth-last-child(1)")
  // give this li the class of 'player'
  activeChars.classList.add("player");
  // give it health adjustment buttons
  adjustHealth();
});

// Add NPC character to Initiative List
npcBtn.addEventListener("click", function(){
  // Roll NPC's initiative, adding user input as a roll modifier
  var rollBonus = Number(document.querySelector("#playerIniInput").value);
  document.querySelector("#playerIniInput").value = rollBonus + Math.floor(Math.random() * (21 - 1)) + 1;
  addChar();
  var activeChars = document.querySelector("#sortable2 li:nth-last-child(1)")
  activeChars.classList.add("NPC");
  adjustHealth();
});

function addChar() {
  // if (!(inputs[1].value && inputs[2].value)) {
  //   alert("Fill out everything!");
  //   inputs[3].value = "";
  //   return false;
  // }
  var pLi = document.createElement("li");
  pLi.innerHTML = liContentBuilder();
  pLi.id = inputs.playerNameInput.value;
  document.getElementById("sortable2").appendChild(pLi);
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

updateButton.addEventListener("click", updateChar);

// Clear Initiative List of Player/NPC li's
initClearButton.addEventListener("dblclick", function (){
  document.querySelector("#sortable").innerHTML = "";
});

// Clear map of all colors
document.querySelector("#squaresClearBtn").addEventListener("click", function(){
  clearColors();
});

// Clear map of colors and player icons
document.querySelector("#mapClearBtn").addEventListener("click", function(){
  clearColors();
  for (var i = 0; i < playerPieces.length; i++) {
    resetPieces(playerPieces[i]);
  }
});

// clear map of player icons
for (var i = 0; i < playerPieces.length; i++) {
  playerPieces[i].addEventListener("dblclick", function(){
    resetPieces(this);
  });
}

// health up and down buttons
function adjustHealth(){
  var cur = document.querySelectorAll(".health");
  for (var i = (cur.length - 2); (cur.length-2) <= i && i < cur.length; i++ ) {
    cur[i].addEventListener("click", function() {
      if (this.classList.contains("up")) {
        this.closest("span").nextElementSibling.textContent ++;
      } else {
        this.closest("span").nextElementSibling.textContent --;
      }
    });
  }
}

// Update currently selected character(s)
function updateChar() {
  var selectedCharsHealth = document.querySelectorAll(".selectedLi span.cHp");
  if (!selectedCharsHealth[0]){
    return false;
  }
  selectedCharsHealth[0].textContent = inputs[1].value;
  selectedCharsHealth[0].parentNode.classList.remove("selectedLi");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function liContentBuilder() {
  // take text from boxes
  var char = {
    icon: inputs.playerIconInput.value,
    name: inputs.playerNameInput.value,
    cHp: inputs.playerHpInput.value,
    mHp: inputs.playerMaxHpInput.value,
    init: inputs.playerIniInput.value,
    selBtn: "<button class='btn btn-success btn-xs selector'><i class='fa fa-plus-square-o'></i></button>",
    delBtn: "<button class='btn btn-danger btn-xs remove'>X</button>",
    upBtn: "<i class='fa fa-angle-double-up health up'></i>",
    dwnBtn: "<i class='fa fa-angle-double-up health down'></i>"
  }
  // build html string
  var spans = "<i class='fa fa-" + char.icon;
  spans += "'></i><span class='name'> " + char.name;
  spans += "</span> --  " + "<span class='healthBtns'>" + char.upBtn + " " + char.dwnBtn;
  spans += "</span> <span class='cHp'>" + char.cHp;
  spans += "</span>\/<span class='mHp'>" + char.mHp;
  spans += "</span>  --  Initiative: <span class='init'>" + char.init;
  spans += "</span> " + char.delBtn + char.selBtn

  return spans;
}

function resetPieces(piece){
  // for (var i = 0; i < playerPieces.length; i++) {
  piece.style.left = "";
  piece.style.right = "";
  piece.style.top = "";
  // }
}

function clearColors(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = "white";
  }
}

document.querySelector("#example1").addEventListener("click", function() {
  var pickedColor = document.querySelector("#example1").style.background.value;
  console.log(pickedColor);
});
// document.querySelector("#example2");
// document.querySelector("#example3");

// on mouse down
// [entireTable].addEventListener("mousedown", function(){

//// add event listener for mouseover
//   var pickedColor = document.querySelector("#colorPicker").value;
//   squares.addEventListener("mouseover", function(){
//     this.style.background.value = pickedColor;
//   })
// })

////// on mouseover, testdrag




// function changeColor(){
//   var pickedColor = document.querySelector("#colorPicker").value;
//   if (squares[i].style.background === "white"){
//     this.style.background = pickedColor;
//   } else {
//     this.style.background = "white";
//   }
// }
//
function testDrag() {
}

function colorSquaresClick() {
  for ( var i = 0; i < squares.length; i++) {
    squares[i].style.background = "white";
  	squares[i].addEventListener("mousedown", function() {
      var pickedColor = document.querySelector("#colorPicker").value;
      if (this.style.background === "white"){
        this.style.background = pickedColor;
    } else {
        this.style.background = "white";
    }
  	});
  }
}

$( "#sortable, #sortable2" ).sortable({
  connectWith: ".connectSort",
  // helper: "clone",
  tolerance: "pointer",
  cursor: "move"
}).disableSelection();

$( ".draggable" ).draggable({
  revert: "invalid",
  revertDuration: 250,
  containment: ".map-table",
  scroll: false,
  grid: [ 25, 12.5 ],
  snap: ".map-table"
  // helper: "clone"
});

$( ".selectable" ).selectable();

$( ".droppable" ).droppable({
  // drop: function(event, ui) {
  //   $.ui.ddmanager.current.cancelHelperRemoval = true;
  // // accept: ".fa"
  // }
});

$("ol").on("click", ".remove", function(){
  $(this.parentNode).slideUp(150, function(){
    $(this).remove();
  });
});

$( "ol" ).on( "click", ".selector", function( event ) {
  ( this ).parentNode.classList.toggle("selectedLi");
});
