// Define an array to store our to-do items
const todoList = [];

// Function to add a new item to the to-do list
function addItem(item) {
  todoList.push(item);
}

// Function to remove an item from the to-do list
function removeItem(item) {
  const index = todoList.indexOf(item);
  if (index !== -1) {
    todoList.splice(index, 1);
  }
}

// Function to display the current to-do list
function displayTodoList() {
  console.log("To-Do List:");
  for (let i = 0; i < todoList.length; i++) {
    console.log(`${i + 1}. ${todoList[i]}`);
  }
}

// Adding some items to the to-do list
addItem("Buy groceries");
addItem("Finish homework");
addItem("Go for a run");

// Display the initial to-do list
displayTodoList();

// Removing an item from the to-do list
removeItem("Finish homework");

// Display the updated to-do list
displayTodoList();
