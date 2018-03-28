// Check off todos with a click
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// delete item by clicking the delete span
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$(".fa-pencil-square-o").click(function() {
  $("input").slideToggle(200);
});

// add new todo item
$("input[type='text']").keypress(function(event){
  // on pressing enter
  if(event.which === 13) {
    //grab inputted text
    var todoText = $(this).val();
    $(this).val("");
    //make new todo list item and append it to UL
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");

  }
});
