let activeId = null;

function openEdit(id){
    const task = getTasks().find(t => t.id === id);
    activeId = id;

    editTitle.value = task.title;
    editCategory.value = task.category;
    editLevel.value = task.level;
    editDescription.value = task.description;

    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

function saveEdit(){
    updateTask({
        id: activeId,
        title: editTitle.value,
        category: editCategory.value,
        level: editLevel.value,
        description: editDescription.value,
        status: getTasks().find(t => t.id === activeId).status
    });

    closeModal();
    renderTasks(); // card render once more 
}