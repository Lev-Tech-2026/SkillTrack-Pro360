function handleAddTask(){
    const task = {
        id: Date.now(),
        title: title.value,
        category: category.value,
        level: level.value,
        description: description.value,
        status: STATUS.PENDING
    };

    if(!validateTask(task)) return;
    
    createTask(task);
    renderTasks();
}

function removeTask(id){
    deleteTask(id)
    renderTasks();
}

function toggleStatus(id){
    const task = getTasks().find(t => t.id === id);
    task.status = 
      task.status === STATUS.PENDING 
       ? STATUS.COMPLETED
       : STATUS.PENDING;

       updateTask(task);
       renderTasks(); // render tasks -> is defined inside ui.js
}

document.addEventListener("DOMContentLoaded", renderTasks); // 