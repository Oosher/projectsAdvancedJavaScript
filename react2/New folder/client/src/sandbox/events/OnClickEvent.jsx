
import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'


export default function OnClickEvent() {


    const onClickFunc =(text)=>{
        console.log(text);
    }
    const onClick2 =(event)=>{
        console.log(event);
    }
    const printTextField = (event)=>{

        console.log(event.target.value);

    }

    return (<>
        <Button variant="contained" color="secondary" onClick={()=>{onClickFunc("somthing")}} >
            click
        
        </Button>
        <Button variant="outlined" color="success" onClick={onClick2}>
        click2

        </Button>

        <TextField id="outlined-basic" label="Outlined" variant="outlined"  onChange={printTextField } />

        </>
    )
}
