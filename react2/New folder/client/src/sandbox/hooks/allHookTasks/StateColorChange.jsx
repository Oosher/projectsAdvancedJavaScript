


import { Box, Container } from '@mui/system';
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

export default function StateColorChange() {

    const [color,setColor] = useState("red");


    const updateColor = (e)=>{

        setColor(e.target.value)

    }

    return (

        <Container sx={{width:"fit-content", marginTop:"3vh",display:"flex",flexDirection:"column"}}>
            <TextField label="Select color" value={color} onChange={updateColor} sx={{margin:"0 auto",alignSelf:"center",justifySelf:"center"}} />
            <Box sx={{backgroundColor:color,width:"300px", height:"300px"}}></Box>
        </Container>
    )
}
