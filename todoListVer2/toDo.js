
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
    deleteButton ;
    editButton ;
    taskContainer ;

    constructor(description,date){

        this.description=description;

        this.date=date;


    }


    createTask(){

    this.status = document.createElement("button");
    this.deleteButton = document.createElement("button");
    this.editButton = document.createElement("button");
    this.taskContainer =document.createElement("div");

    this.taskContainer.innerHTML =`${this.description} ${this.date}`;
    
    this.editButton.innerText="Edit"

    this.deleteButton.innerText="X"

    this.status.innerHTML="&#10003;";

    this.taskContainer.appendChild(this.status);
    this.taskContainer.appendChild(this.editButton);
    this.taskContainer.appendChild(this.deleteButton);

    this.activateEventListeners();

    }



    activateEventListeners(){

        this.editButton.addEventListener("click",()=>{
            editTask();
        })

            this.deleteButton.addEventListener("click",()=>{

            taskManager.delete(this.description);
            
        })

        this.status.addEventListener("click",()=>{

            this.status.style.color="lightGreen";

        })


    }



    
}


//task manager 

class TaskManager{

    taskArray=[];

    taskCounter=0;

    constructor(){
        if (JSON.parse(localStorage.getItem("savedTasks"))==null) {
            this.taskArray=[];
            console.log((localStorage.getItem("savedTasks")));
        }
        else{
        this.tempoArray = JSON.parse(localStorage.getItem("savedTasks"));
        
        console.log(this.tempoArray); 
        } 
       /*  displayData(this.taskArray);  */
      

        
    }

    add(task){
        this.taskArray.push(task);
        displayData(this.taskArray);
        saveData();
  

    }

    delete(taskName){
        let taskToDeleteIndex= this.taskArray.findIndex((taskToDelete)=>{

            return taskToDelete.description===taskName;

            });
            
        this.taskArray.splice(taskToDeleteIndex,1);


        displayData(this.taskArray);

        saveData();
        

    }

}

function displayData(taskArray){

    tasksContainer.innerHTML="";

    taskArray.map((task)=>{
        task.createTask();
        tasksContainer.appendChild(task.taskContainer);

    })
}



const taskManager =new TaskManager();


function saveData() {
     /* console.log(taskManager.taskArray,"\n",localStorage.getItem("savedTasks"));  */
    
    localStorage.setItem("savedTasks",JSON.stringify(taskManager.taskArray));

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
        
        }
        else{

            alert("Task name could not be empty");

        }

    }

}


function editTask(task) {

            let newInput = document.createElement("input");
            let newDate = document.createElement("input");
            let confirmChanges = document.createElement("button");
            let cancelEdit = document.createElement("button");
            newDate.type="date";
    
}