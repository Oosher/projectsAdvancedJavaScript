


import { Box, Container } from '@mui/system';
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

export default function StateBorderChange() {

    const [border,setBorder] = useState("2");


    const updateBorder = (e)=>{

        setBorder(e.target.value)

    }


    //max border wile still can show the original box details is = 149.99999237
    return (

        <Container sx={{width:"fit-content", marginTop:"3vh",display:"flex",flexDirection:"column"}}>

            <TextField label="Select color" type="number" value={border} onChange={updateBorder} sx={{margin:"0 auto",alignSelf:"center",justifySelf:"center"}} />

            <Box sx={{borderRadius:"50px", backgroundColor:"red",width:"300px", height:"300px",border:`${border}px solid black`}}></Box>

        </Container>
    )
}
