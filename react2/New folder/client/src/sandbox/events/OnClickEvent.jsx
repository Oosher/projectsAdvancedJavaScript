
import React from 'react'
import Button from '@mui/material/Button'

export default function OnClickEvent() {


    const onClickFunc =()=>{
        console.log("button clicked");
    }

    return (
        <Button variant="contained" color="secondary" onClick={onClickFunc}>
            click
        
        </Button>
    )
}
