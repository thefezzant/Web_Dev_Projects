var firstLis = document.querySelectorAll("li");

for (var i = 0; i < firstLis.length; i++) {
  firstLis[i].addEventListener("mouseover", function(){
    this.style.color = "green";
  });
  firstLis[i].addEventListener("mouseout", function(){
    this.style.color = "black";
  });
  firstLis[i].addEventListener("click", function(){
    this.classList.toggle("done");
  });

// firstLi.addEventListener("mouseover", function(){
//   firstLi.style.color = "green";
// });
// firstLi.addEventListener("mouseout", function(){
//   firstLi.style.color = "black";
}
