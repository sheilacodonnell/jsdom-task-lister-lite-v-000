
document.addEventListener("DOMContentLoaded", () => {
  
  const task = document.getElementById("new-task-description");
  const submit = document.getElementById("submit");
  const taskList = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");
  let listElement = document.createElement("li");

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    listElement.innerHTML = task.value;
    taskList.appendChild(listElement);
  });
});
