
const addTask = document.querySelector("#addTask");

const taskInfo =document.querySelector(".taskInfo") ;

const taskName = document.querySelector("#taskName");

const taskDateLine = document.querySelector("#taskDateLine");

const tasksContainer =document.querySelector(".tasksContainer");

let addTaskClickIndicator = false;



class Task {
    description;
    date;
    status;
    deleteButton;
    editButton;
    taskContainer;
    constructor(description,date){

        this.description=description;

        this.date=date;

        this.status=false;

    }


    
}

addTask.addEventListener("click",createNewTask);


function createNewTask(){

    if (!addTaskClickIndicator) {


        taskInfo.style.display="block";
        addTaskClickIndicator=true;
    }
    else{

        if (taskName.value!="") {
        let newTask = new Task(taskName.value, taskDateLine.value);
        taskManager.add(newTask);
        taskInfo.style.display="none";
        addTaskClickIndicator=false;
        saveData();
        }
        else{

            alert("Task name could not be empty");

        }

    }

}


class TaskManager{

    taskArray=[];

    taskCounter=0;

    constructor(){
        if (localStorage.getItem("savedTasks")==null) {
            this.taskArray=[];
        }
        else{
        this.taskArray=JSON.parse(localStorage.getItem("savedTasks"));
        }
        displayData(this.taskArray);

        
    }

    add(task){
        this.taskArray.push(task);
        displayData(this.taskArray)

    }

    delete(taskName){
        let taskToDeleteIndex= this.taskArray.findIndex((taskToDelete)=>{

            return taskToDelete.description==taskName;

            });
            
        this.taskArray.splice(taskToDeleteIndex,1);


        displayData(this.taskArray);

        saveData();

    }
}

function displayData(taskArray){

    tasksContainer.innerHTML="";

    taskArray.map((task)=>{

        task.taskContainer = document.createElement("div");
        
        task.editButton = document.createElement("button");

        task.deleteButton = document.createElement("button");

        task.status = document.createElement("button");

        
        task.editButton.addEventListener("click",()=>{
            editTask(task);
        })

        task.deleteButton.addEventListener("click",()=>{

            taskManager.delete(task.description);
            
        })

        task.status.addEventListener("click",()=>{

            task.status.style.color="lightGreen";

        })

        task.taskContainer.innerText=`${task.description} ${task.date}`;

        task.editButton.innerText="Edit"

        task.deleteButton.innerText="X"

        task.status.innerHTML="&#10003;";
        
        task.taskContainer.appendChild(task.status);

        task.taskContainer.appendChild(task.editButton);

        task.taskContainer.appendChild(task.deleteButton)

        tasksContainer.appendChild(task.taskContainer);
    })
}

const taskManager =new TaskManager();


function saveData() {
    
    localStorage.setItem("savedTasks",JSON.stringify(taskManager.taskArray));

}

function editTask(task) {

            let newInput = document.createElement("input");
            let newDate = document.createElement("input");
            let confirmChanges = document.createElement("button");
            let cancelEdit = document.createElement("button");
            newDate.type="date";
    
}