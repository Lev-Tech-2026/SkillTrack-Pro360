function updateStats(){
    const tasks = getTasks();
    const done = tasks.filter(t => t.status === STATUS.COMPLETED).length;
    progress.innerText = `${done} / ${tasks.length} completed`;
}