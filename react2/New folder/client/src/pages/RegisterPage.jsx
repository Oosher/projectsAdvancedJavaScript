

import { Container } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom'
import useForm from '../forms/hooks/useForm'
import { useDataProvider } from '../forms/hooks/UserProvider'
import useUsers from '../forms/hooks/useUsers'
import initialSignupForm from '../forms/utils/initialSignupForm'
import ROUTS from '../routs/routsPage'
import UserForm from '../users/forms/UserForm'
import signupSchema from '../users/joiScheme/signupSchema'

export default function RegisterPage() {
    const handleSubmit = ()=>console.log("submitted");
    const {handleSignup} = useUsers();
    const { user} = useDataProvider();
    const {onSubmit,handleChange,handleReset,validateForm,setData,value} = useForm(initialSignupForm,signupSchema,handleSignup);

    if (user) {
        return <Navigate to={ROUTS.ROOT}/>
    }

    return (
        <Container sx={{width:"fit-content", marginTop:"-2vh" , paddingTop:"3vh", height:"70vh",boxSizing:"border-box"}}>
            <UserForm title='Sign Up' onSubmit={onSubmit} onReset={handleReset} onInputChange={handleChange} setData={setData}  errors={value.errors} data={value.data}  onFormChange={validateForm}/>
        </Container>
    )
}
