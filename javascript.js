document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Load tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${task}</span>
                <button data-index="${index}">Done</button>
            `;
            taskList.appendChild(listItem);
        });
    }

    // Add a new task
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            renderTasks();
        }
    });

    // Mark a task as done
    taskList.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            const index = event.target.getAttribute("data-index");
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        }
    });

    // Initial rendering of tasks
    renderTasks();
});
