
       const taskInput = document.getElementById("taskInput");
       const taskList = document.getElementById("taskList");

       // Function to add a new task
       function addTask() {
           const taskText = taskInput.value;
           if (taskText.trim() === "") {
               alert("Task cannot be empty!");
               return;
           }
// creating a list of tasks
           const taskItem = document.createElement("li");
           taskItem.textContent = taskText;

           // Add a delete button
           const deleteButton = document.createElement("button");
       
           deleteButton.onclick = function() {
               taskItem.remove();
           };

           // Append the task item
         
           taskList.appendChild(taskItem);

           // Clear the input field
           taskInput.value = "";
       }