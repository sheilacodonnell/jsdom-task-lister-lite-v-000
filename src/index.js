
document.addEventListener("DOMContentLoaded", () => {
  
  const task = document.getElementById("new-task-description");
  const submit = document.getElementById("submit");
  const taskList = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");
  const node = document.createElement("LI");

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    list.appendChild(task.value)
document.getElementById("myList").appendChild(node);
  });
  

});
