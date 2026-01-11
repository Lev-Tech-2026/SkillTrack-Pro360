
function validateTask(task){
    if(!task.title.trim()){
        alert("Title is required");
        return false;
    }

    if(!task.category.trim()){
        alert("Category is Required");
        return false;
    }

    return true;
}