let form = document.getElementById("create-task-form");
let task = document.getElementById("new-task-description");
let listItem = document.createElement("li");
let taskList = document.getElementById("tasks");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', function(event) {
    event.preventDefault()
  listItem.appendChild(listItemText);
  taskList.appendChild(listItem);
  });
  

});
