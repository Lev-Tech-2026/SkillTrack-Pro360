// search task - you can try 
// - filter status - you 

function searchTasks(query){
    renderTasks(
        getTasks().filter(t => 
            t.title.toLowerCase().includes(query.toLowerCase()))
            
    );
}

function filterByStatus(status){
    renderTasks(
        status === "all" ? getTasks() : getTasks().filter(t => t.status === status)
    );
}