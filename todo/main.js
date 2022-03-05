const newTask = document.querySelector('.task-input input');
const taskListContainer = document.querySelector('.task-box');
const clearAll = document.querySelector('.clear-all');
let listTodos = JSON.parse(localStorage.getItem('todo-list'));
const filters = document.querySelectorAll('.filters span');

let editID = -1;
let isEdit = false;

filters.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('span.active').classList.remove('active');
        btn.classList.add('active');
        showTodoList(btn.id);
    })
})

function updateTaskStatus(selectedTask) {
    const taskNameElement = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskNameElement.classList.add('checked');
        listTodos[selectedTask.id].status = 'completed';
        localStorage.setItem('todo-list', JSON.stringify(listTodos));
    } else {
        taskNameElement.classList.remove('checked');
        listTodos[selectedTask.id].status = 'pending';
        localStorage.setItem('todo-list', JSON.stringify(listTodos));
    }
}

function showMenu(selectedTask) {
    let taskMenu = selectedTask.parentElement.lastElementChild;
    taskMenu.classList.add('show');
    document.addEventListener('click', (e) => {
        if (e.target.tagName !== 'I' || e.target != selectedTask) {
            taskMenu.classList.remove('show');
        }
    })
}

function deleteTask(index) {
    listTodos = [...listTodos.slice(0, index), ...listTodos.slice(index + 1)];
    localStorage.setItem('todo-list', JSON.stringify(listTodos));
    showTodoList();
}

function updateTask(id, name) {
    newTask.value = name;
    editID = id;
    isEdit = true;
}

function showTodoList(id = 'all') {
    let result = "";
    let listTodoFilter = [...listTodos];
    if (id != 'all') {
        listTodoFilter = listTodos.filter(todo => todo.status === id);
    }

    if (listTodoFilter && listTodoFilter.length > 0) {
        listTodoFilter.forEach((todo, index) => (
            result += `<li class="tag">
                <label for='${index}'>
                    <input type="checkbox" name="" id='${index}' 
                    onclick="updateTaskStatus(this)" 
                    ${todo.status == 'completed' ? "checked" : ""}>
                    <p> ${todo.name}</p>
                </label >
            <div class="settings">
                <i class="fa-solid fa-ellipsis" onclick="showMenu(this)"></i>
                <ul class="task-menu">
                    <li>
                    <i class="fa-solid fa-pen-to-square" onclick="updateTask(${index}, '${todo.name}')"></i> 
                    Edit
                    </li>
                    <li><i class="fa-solid fa-trash" onclick="deleteTask(${index})"></i> Delete </li>
                </ul>
            </div>
            </li > `
        ));
    }

    taskListContainer.innerHTML = result || `You don't have any task`;
}

showTodoList();

newTask.onkeyup = (e) => {
    let newTaskValue = newTask.value.trim();
    if (e.key == 'Enter' && newTaskValue) {
        if (!listTodos) listTodos = [];
        if (!isEdit) {
            let taskInfo = {
                name: newTaskValue,
                status: "pending"
            }

            listTodos.push(taskInfo);
        } else {
            listTodos[editID].name = newTaskValue;
        }
        newTask.value = '';
        localStorage.setItem('todo-list', JSON.stringify(listTodos));
        showTodoList();

    }
}

clearAll.onclick = () => {
    listTodos.length = 0;
    localStorage.setItem('todo-list', null);
    showTodoList();
}