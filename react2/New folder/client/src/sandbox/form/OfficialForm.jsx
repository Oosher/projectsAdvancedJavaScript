


import { Container, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../hooks/allHookTasks/MyButton'
import Joi from 'joi'

export default function OfficialForm() {

    const [formData,setFormData] = useState({email:"",password:""})

    const [ errors,setErrors] = useState({email:false,password:false})

    const [errorMessage, setErrorMessage] = useState("");

    const [disable, setDisable] = useState(true);

    const scheme = {email:Joi.string().regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
),password:Joi.string().regex(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-.]{1}).{7,20})/
)}

    const dataScheme = Joi.object(scheme);

    const goto = useNavigate();

    const updateFormData =(e)=>{

        setFormData((prev)=>{return {...prev,[e.target.name]:e.target.value}})

        validateData(e);

    }

    const cancelLogIn = ()=>{

        goto("/")

    }

    const resetForm = ()=>{
        
        setFormData({email:"",password:""})
        
    }


    const validateData = (e)=>{

    const {error} = dataScheme.validate(formData)

    error?.message.includes(e.target.name)?setErrors((prev)=>{return {...prev,[e.target.name]:true}}):setErrors((prev)=>{return {...prev,[e.target.name]:false}})

    error?setDisable(true):setDisable(false);

    setErrorMessage(error?.details[0].message?error.details[0].message:"")

    }
    return (
        <Container component={"form"} onSubmit={(e)=>{
            e.preventDefault();

            console.log("submitted");
        }} sx={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"4vh"}}>
            <TextField id="" label="Email" name='email' value={formData.email} onChange={updateFormData} type="email" sx={{width:"20vw"}}  error={errors.email} />
            <TextField id="" label="Password" name='password' value={formData.password} onChange={updateFormData} type="password" sx={{width:"20vw",marginTop:"1vh",marginBottom:"0.5vh"}} error={errors.password} helperText={errorMessage}/>
            <Box>
                <MyButton text="log In" type="submit"  sx={{width:"8vw",fontSize:"0.6rem"}}  disabled={disable}/>
                <MyButton text="Cancel" onclick={cancelLogIn} sx={{width:"6vw",fontSize:"0.6rem"}} />
                <MyButton text="Reset" onclick={resetForm} sx={{width:"6vw",fontSize:"0.6rem"}}  />
            </Box>
        </Container>
    )
}
