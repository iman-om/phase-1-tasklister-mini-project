document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const newTask = document.createElement("li");
      newTask.innerText = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(newTask);
      });

      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);

      taskInput.value = "";
    }
  });
});
