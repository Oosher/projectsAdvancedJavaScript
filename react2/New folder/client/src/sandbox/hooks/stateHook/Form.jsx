


import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography'

export default function Form() {


    const [personalInfo,setPersonalInfo] = useState({firstName:"",lastName:""});

const updatePersonalInfo = (e)=>{


    setPersonalInfo((prev)=>{return {...prev,[e.target.name] :e.target.value }})


}


    return (<Container sx={{display:"flex",flexDirection:"column",marginTop:"3vh"}}>

                <TextField name='firstName' label="First Name" value={personalInfo.firstName} onChange={updatePersonalInfo}/>

                <TextField name='lastName' label="Last Name" value={personalInfo.lastName} onChange={updatePersonalInfo}/>

                <Typography variant="body1" color="initial">First Name : {personalInfo.firstName}</Typography>
                <Typography variant="body1" color="initial">Last Name : {personalInfo.lastName}</Typography>

            </Container>
    )
}
