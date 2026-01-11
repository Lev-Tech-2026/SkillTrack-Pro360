function createTask(task){
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
}

function updateTask(updatedTask){
const tasks = getTasks().map(t =>
    t.id === updatedTask.id ? updatedTask : t);
    saveTasks(tasks);
}

function deleteTask(id){
    saveTasks(getTasks().filter(t => t.id !== id));
}