// Get references to HTML elements
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("task-list");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const listItem = document.createElement("li");
        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;
        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        listItem.appendChild(taskTextElement);
        listItem.appendChild(doneButton);
        taskList.appendChild(listItem);
        taskInput.value = "";
        doneButton.addEventListener("click", markAsDone);
    }
}

// Function to mark a task as done
function markAsDone(event) {
    const listItem = event.target.parentElement;
    listItem.classList.toggle("done");
}

// Set up event listeners
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
