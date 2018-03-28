var monsters = {
  Baboon: {

    type: "Beast",
    size: "Small",
    ac: 12,
    hp: "2",
    hpn: "2",
    hpd: "2",
    hpa: "2",
    spellcasting: false,
    attack1Dmg: function(){
      return (Math.floor(Math.random() * 6 + 1 ))
    }
    // attack2Damage: "",
    // Page: "",
    // crDecimal: 0,
    // Arctic: "",
    // Coast: "",
    // Desert: "",
    // Forest: "",
    // Grassland: "",
    // Hill: "",
    // Mountain: "",
    // Swamp: "",
    // Underdark: "",
    // Underwater: "",
    // Urban: ""
  },

  Kraken: {

    type: "Monstrosity",
    size: "Small",
    ac: 22,
    hp: "1",
    hpn: "1",
    hpd: "1",
    hpa: "1",
    spellcasting: true,
    attack1Dmg: function(){
      return (Math.floor(Math.random() * 21 + 3 ))
    }

  }




}

function testFind(beast){
  for (var beast in monsters) {
    return beast;

    // var option = document.createElement("option");
    // option.value = beast;
    // option.textContent = beast;
    // document.querySelector("#attribute").appendChild(option);
  }
}



document.querySelector("#monsterBtn").addEventListener("click", function() {
  var monsterInput = document.querySelector("#monsterInput").value;
  var attrInput = document.querySelector("#attribute").value;
  if (monsters[monsterInput]) {
    document.querySelector("#result").textContent = testFind(monsterInput);
  } else {
  alert("Doesn't Exist, eat a dick.");
  }
});
