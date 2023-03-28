

import { Container } from '@mui/material'
import React from 'react'
import useForm from '../forms/hooks/useForm'
import useUsers from '../forms/hooks/useUsers'
import initialSignupForm from '../forms/utils/initialSignupForm'
import UserForm from '../users/forms/UserForm'
import signupSchema from '../users/joiScheme/signupSchema'

export default function RegisterPage() {
    const handleSubmit = ()=>console.log("submitted");
    const {handleSignup} = useUsers();
    const {onSubmit,handleChange,handleReset,validateForm,setData,value} = useForm(initialSignupForm,signupSchema,handleSignup);


    return (
        <Container sx={{width:"fit-content", marginTop:"-2vh" , paddingTop:"3vh", height:"70vh",boxSizing:"border-box"}}>
            <UserForm title='Sign Up' onSubmit={onSubmit} onReset={handleReset} onInputChange={handleChange} setData={setData}  errors={value.errors} data={value.data}  onFormChange={validateForm}/>
        </Container>
    )
}
