


import React from 'react'
import { useDataProvider } from '../forms/hooks/UserProvider'
import { Container, Paper, Typography } from '@mui/material';

export default function UserPage() {

    const {user} = useDataProvider();
    console.log(user);

    return (
        <Container sx={{width:"50vw",paddingTop:"4vh"}}>
            <Paper sx={{padding:"20px" ,display:"flex",flexDirection:"column",rowGap:"15px"}}>
                <Typography variant="h4" color="initial">name : {user?.name}</Typography>
                <Typography variant="h4" color="initial">email : {user?.email}</Typography>
                <Typography variant="h4" color="initial">Phone Number : {user?.phone}</Typography>
                <Typography variant="h4" color="initial">City : {user?.city}</Typography>
                <Typography variant="h4" color="initial">Street Address : {user?.street}</Typography>
                <Typography variant="h4" color="initial">Business Account : {user?.business?"Yes":"No"}</Typography>
                <Typography variant="h4" color="initial">Admin Account : {user?.isAdmin?"Yes":"No"}</Typography>
                
            </Paper>
        </Container>
    )
}
