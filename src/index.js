
document.addEventListener("DOMContentLoaded", () => {
  
  const task = document.getElementById("new-task-description");
  const submit = document.getElementById("submit");
  const list = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    list.appendChild(task.value)

  });
  

});
