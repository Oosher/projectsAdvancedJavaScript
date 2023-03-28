


import React from 'react'
import Form from '../../forms/components/Form';
import useForm from '../../forms/hooks/useForm'
import loginSchema from '../joiScheme/loginScheme';
import initialLogin from './initialLogin';
import ROUTS from '../../routs/routsPage';
import Input from '../../forms/components/Input';
import useUsers from '../../forms/hooks/useUsers';
import { useDataProvider } from '../../forms/hooks/UserProvider';
import { Navigate } from 'react-router-dom';

export default function ImportedForm() {
    const {user} = useDataProvider();
    const loginStatus = ()=>{

        console.log("login Success");

    }

    const {handleLogin,handleLogout} = useUsers()
    const {value,onSubmit,handleChange,handleReset,validateForm}= useForm(initialLogin,loginSchema,handleLogin);


    if (user) {
        
        return <Navigate replace to={ROUTS.ROOT}/>
        
    }

    return (
        <Form onChange={validateForm} onReset={handleReset} onSubmit={onSubmit} on title="Log In" to={ROUTS.ROOT}>


        <Input name="email" label="email"  data={value.data} type="email"  onChange={handleChange}  error={value.errors.first}/>
        <Input name="password" label="Password" data={value.data} type="password"   onChange={handleChange} error={value.errors.last}/>
        
        
        
        </Form>
    )
}
