



import React, { memo } from 'react'
import Button from '@mui/material/Button'

function MyButton({sx,text,onclick,type,disabled, children}) {

    console.log("but"+text,children);
    return (
        <Button variant="outlined" color="primary" sx={{...sx}} onClick={onclick} type={type} disabled={disabled}> {text} </Button>
    )
}



export default memo(MyButton)