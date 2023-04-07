



import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import useForm from '../forms/hooks/useForm';
import { useDataProvider } from '../forms/hooks/UserProvider';
import {  editUser } from '../forms/utils/usersApiService';
import normalizeUser from '../users/forms/normallization/normalizeUser';
import UserForm from '../users/forms/UserForm';
import signupSchema from '../users/joiScheme/signupSchema';
import initialSignupForm from '../forms/utils/initialSignupForm';
import ROUTS from '../routs/routsPage';

import { getUserData } from '../forms/utils/usersApiService';
import mapToUserModel from '../users/forms/normallization/mapToUserModel';

export default function EditUser() {

    const {user} = useDataProvider();

    const [newUserData,setNewUserData] = useState()

    const {value,...rest}= useForm(initialSignupForm,signupSchema,()=>{editUser(user.id,{...normalizeUser(value.data)})})

    useEffect(()=>{
    
    if ( user) {
        
    
    getUserData(user?.id)
    
    .then((data)=>{
        
    
        console.log(data);

        rest.setData(mapToUserModel(data) )
    
    })

    }

},[user])

    return (

        <Container sx={{width:"fit-content"}}>
            <UserForm title='Edit Your info' onFormChange={rest.validateForm} onInputChange={rest.handleChange} onReset={rest.handleReset} onSubmit={rest.onSubmit} data={value.data} errors={value.errors} setData={rest.setData} />
        </Container>
    )
}
