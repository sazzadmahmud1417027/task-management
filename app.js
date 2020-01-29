const form =document.querySelector('#task-form');
const tasklist=document.querySelector(".collection");
const clearBtn=document.querySelector(".clear-task");
const filter=document.querySelector("#filter");
const taskInput=document.querySelector("#task");

//loadAllEventListeners
loadAllEventListeners();
function loadAllEventListeners(){
    form.addEventListener('submit',addTask);
    //remove single task
    tasklist.addEventListener('click',removeTask);
    //clear all task
    clearBtn.addEventListener('click',clearTask);
    //filter task
    filter.addEventListener('keyup',filterTasks);
}
function addTask(e){
    if(taskInput.value==''){
        alert('Add a task');
    }
    else{
        const li = document.createElement("li");
        //adding a class
        li.className='collection-item';
        //createclassname and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link);
        tasklist.appendChild(li);
        e.preventDefault();
    }
    //create li element

}
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are you sure? You want to remove it")){
            e.target.parentElement.parentElement.remove();
        }
    }
}
function clearTask(e){
    if(tasklist.children.length!=0){
        while(tasklist.firstChild){
            tasklist.removeChild(tasklist.firstChild);
        }
    }
   else{
       alert("Nothing to remove");
    }
}
function filterTasks(e){
    const text=e.target.value.toLowerCase();
    const taski = document.querySelectorAll('.collection-item').forEach(function(task){
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) !=-1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    });
}