


import { Box, Container, Grid, Typography } from '@mui/material'

import React, { useState } from 'react'
import LoopIcon from '@mui/icons-material/Loop';
import { useNavigate } from 'react-router-dom';
import FormButton from './FormButton';
import CustomFormInput from './CustomFormInput';
import { useSnackBar } from '../../provider/SnackbarProvider';

export default function Form2() {

    const [nameDetails,setNameDetails] = useState({firstName:"",lastName:""});

    const {displaySnackBar,setSnackMessage,setSnackColor} = useSnackBar();

    setSnackMessage("The form has been reset");

    setSnackColor("info")

    const navigate = useNavigate()


    const updateInfo = (e)=>{
        
        setNameDetails((prev)=>{

            return {...prev,[e.target.name]:e.target.value}

        })
        console.log(nameDetails);
    }


const resetForm = ()=>{

    setNameDetails({firstName:"",lastName:""})
}


    return (
        <Container
        sx={{
            mt: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <Box component="form" sx={{ mt: 2, p: { xs: 1, sm: 2 } }}>
                <Typography align="center" variant="h5" component="h1" mb={2}>
                Example Form
                </Typography>
                <Grid container spacing={1}>
                <CustomFormInput 
                    name="firstName"
                    label="First Name"
                    type="text"
                    fullWidth
                    value={nameDetails.firstName}
                    onChange={updateInfo}>
                    
                </CustomFormInput>
                <CustomFormInput  
                    name="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                    value={nameDetails.lastName}
                    onChange={updateInfo}>

                </CustomFormInput>
                </Grid>


                <Grid container spacing={1} my={2} direction="row" width="100">
                <Grid item xs={12} sm={6}>
                    <FormButton color="error" component="div" variant="outlined" onclick={()=>{
                        navigate("/")
                    }}>
                    Cancel
                    </FormButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormButton variant="outlined" component="div"  onclick={()=>{resetForm();displaySnackBar();}}>
                        <LoopIcon />
                    </FormButton>
                </Grid>
                </Grid>
            </Box>
        </Container>

    )
}
