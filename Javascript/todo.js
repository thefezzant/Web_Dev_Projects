var todos = ["Buy Cheese"];

var input = prompt("What would you like to do?");

while (input !== "quit") {

  if (input === "list") {
    listTodos();
  }

  else if (input === "new") {
    newTodo();
  }
  else if (input === "delete") {
    deleteTodo();
  }

  input = prompt("What would you like to do?");
}

console.log("Ok, Goodbye!");

// Functions can be defined before OR after they are called

function listTodos() {
  console.log("********");
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("********");
}

function newTodo() {
  var newItem = prompt("What would you like to add?");
  todos.push(newItem);
  console.log(newItem + " added to list");
}

function deleteTodo() {
  var del = prompt("Enter the index of todo for deletion");
  console.log(todos[del] + " deleted from list");
  todos.splice(del, 1);
}
