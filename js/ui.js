function renderTasks(tasks = getTasks()){
    taskList.innerHTML = ""; // element in html which is not defined - const taskList = ""; html - TaskList 

    if(!tasks.length){
        taskList.innerHTML = "<p>No tasks yet</p>";
        return;
    }
    
    tasks.forEach(task => {
        const div = document.createElement("div")
        div.className = "task-card";

        div.innerHTML= `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <small>${task.category} . ${task.level}</small>
        <p>Status: <b>${task.status} </b></P>
        <div>
          <button onclick="openEdit(${task.id})">Edit</button>
          <button onclick="toggleStatus(${task.id})">Toggle</button>
          <button onclick="removeTask(${task.id})">Delete</button>
        </div>
        `;

        taskList.appendChild(div);
    });

    updateStats();

}