

import { Container } from '@mui/system'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'

export default function MyInfo() {


    const [myDetails,setMyDetails]= useState({firstName:"Osher",lastName:"Ben zaken"});




    const changeDetails =(e)=>{

        setMyDetails((prev)=>{

            return {...prev, [e.target.name]:e.target.value}
        })
    }

//option 2


    /* const changeDetails =(e)=>{

        setMyDetails({...myDetails, firstName : e.target.value})
    }
 */

    return (
    <Container>
        <Typography variant="body1" color="initial" >First name : {myDetails.firstName}</Typography>
        <Typography variant="body1" color="initial">Last name : {myDetails.lastName}</Typography>
        <TextField variant="standard" placeholder='New First name' name="firstName" onChange={changeDetails} ></TextField>
        <TextField variant="standard" placeholder='New Last name' name='lastName' onChange={changeDetails}></TextField>

    </Container>
    )
}
