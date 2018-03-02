document.addEventListener('DOMContentLoaded', function () {

    var addTaskButton = document.getElementById('addTaskButton');
    var removeButton = document.getElementById('removeFinishedTasksButton');
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var toBeDone = document.getElementById('toBeDone');
    var clicks = 0;

    addTaskButton.addEventListener('click', function () {

        var newTask = document.createElement('li');
        var newP = document.createElement('p');

        if (taskInput.value.length >= 5 && taskInput.value.length <= 100) {
            taskList.appendChild(newTask);
            newTask.appendChild(newP);
            newP.innerText = taskInput.value;
            taskInput.value = '';  //zerowanie inputu

            undoneTasksCounter();

        } else {
            window.alert("Make sentence containing minimum 5 signs, but not more than 100");
            return false;
        }

        var completeButton = document.createElement('button');
        newTask.appendChild(completeButton);
        completeButton.innerText = ('complete');

        completeButton.addEventListener('click', function () {
            clicks++;
            if (clicks % 2 !== 0) {
                newTask.style.color = '#e85a71';
                newTask.style.textDecoration = 'line-through';
            } else {
                newTask.style.color = '#fec8c9';
                newTask.style.textDecoration = 'none';
            }

            undoneTasksCounter();
        });

        //button to remove one single task
        var deleteButton = document.createElement('button');
        newTask.appendChild(deleteButton);
        deleteButton.innerText = ('delete');

        deleteButton.addEventListener('click', function () {
            newTask.parentElement.removeChild(newTask);
            undoneTasksCounter();
        });

    });

    //button to remove all done tasks
    removeButton.addEventListener('click', function () {
        for (var i = 0; i < taskList.children.length; i++)
            if (taskList.children[i].style.color == 'rgb(232, 90, 113)'){
                taskList.children[i].style.display = 'none';
            }

        undoneTasksCounter();

    });

    //counter

    function undoneTasksCounter() {
        var counter = 0;
        var allTasks = taskList.querySelectorAll('li');

        for (var i = 0; i < allTasks.length; i++) {
            var task = allTasks[i];

            if (task.style.color == '' || task.style.color == 'rgb(254, 200, 201)') {
                counter++;
            }
        }

        toBeDone.innerHTML = 'things to be done: ' + counter;
    }
});







