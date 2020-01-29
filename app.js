const form =document.querySelector('#task-form');
const tasklist=document.querySelector(".collection");
const clearBtn=document.querySelector(".clear-task");
const filter=document.querySelector("#filter");
const taskInput=document.querySelector("#task");

//loadAllEventListeners
loadAllEventListeners();
function loadAllEventListeners(){
    form.addEventListener('submit',addTask);
}
function addTask(e){
    if(taskInput.value==''){
        alert('Add a task');
    }
    //create li element
    const li = document.createElement("li");
    //adding a class
    li.className='collection-item';
    //createclassname and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link);
    console.log(li);
    e.preventDefault();
}