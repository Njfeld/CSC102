// Task class definition
class Task {
    constructor(name) {
        this.name = name;
        this.isComplete = false;
    }
}

let taskList = [];
const taskListElement = document.getElementById('taskList');


// String Validation
function validateTask(taskName) {
    if (taskName.trim() === '') {
        return false;
    }
    return true;
}

//Task and String Manipulation
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value;

    if (validateTask(taskName)) {
        const newTask = new Task(taskName);
        taskList.push(newTask);
        taskInput.value = '';
        displayList();
    }
}

// Display List (uses a loop)
function displayList() {
    taskListElement.innerHTML = '';
    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        
        // makes the task clickable
        li.onclick = () => toggleComplete(index); 

        if (task.isComplete) {
            li.classList.add('completed');
        }

        // String Manipulation to format the output
        const statusSpan = document.createElement('span');
        statusSpan.textContent = task.isComplete ? ' (Completed)' : ' (Pending)';

        li.appendChild(statusSpan);
        taskListElement.appendChild(li);
    });
}

// Task Complete or Incomplete
function toggleComplete(index) {
    taskList[index].isComplete = !taskList[index].isComplete;
    displayList();
}

// Clear Completed Tasks
function clearCompleted() {
    taskList = taskList.filter(task => !task.isComplete);
    displayList();
}