

import { Container } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom';
import PageHeader from '../components/header'
import ROUTS from '../routs/routsPage';

export default function LoginPage() {

    const loggedIn = true;

    if (loggedIn) return    <Navigate to={ROUTS.ROOT}/>

    return (
        <Container>
            
            <PageHeader title="Log In " subTitle="please enter your username and password "/>

        </Container>
    )
}
