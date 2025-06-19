// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function(){
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    const addTask = function(){
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Alert the user to enter a task if taskText is empty
        if (taskText === ""){
            alert('Enter your task');
            return; //exit the function if no valid input
        }

        // Task Creation and Removal
            const newLi = document.createElement('li');
            newLi.textContent = taskText;
            const newButton = document.createElement('button');
            newButton.textContent = 'Remove';
            newButton.classList.add('remove-btn');
            newButton.onclick = () =>{
                taskList.removeChild(newLi);
            }
        
            newLi.appendChild(newButton);
            taskList.appendChild(newLi);

            taskInput.value = "";
        
    }

    addButton.addEventListener('click', addTask);
})