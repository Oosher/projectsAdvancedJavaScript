



import React, { memo } from 'react'
import Button from '@mui/material/Button'

function MyButton({sx,text,onclick,children}) {

    console.log("but"+text,children);
    return (
        <Button variant="outlined" color="primary" sx={{...sx}} onClick={onclick}> {text} </Button>
    )
}



export default memo(MyButton)