




import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box } from '@mui/system';
import { List, ListItem } from '@mui/material';



export default function ToDoList() {

    const [toDo,setToDo] = useState("");

    const [toDoList,setToDoList] = useState([{TaskName:"asd",id:0}]);

    
    const updateText= (e)=>{

        setToDo(e.target.value)
    }

    const addTodo =()=>{

        setToDoList(()=>{
            return [...toDoList,{TaskName: toDo,id:toDoList.length}];
        }) 

        

        setToDo("")
        console.log(toDoList);
        

    }

    return (<Box>
        <TextField id="" label=""  value={toDo}  onChange={updateText}/>
        


        <Button variant="outlined" color="error"  onClick={addTodo}  disabled={toDo===""}>+</Button>

        <List>
        {toDoList.map((task)=>{

            return <ListItem key={task.id}>{task.TaskName}</ListItem>

        })}
        </List>
        </Box>
    )
}
