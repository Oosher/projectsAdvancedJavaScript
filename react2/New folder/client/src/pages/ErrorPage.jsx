


import { Alert, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ROUTS from '../routs/routsPage'


export default function ErrorPage() {
    return (
        <Alert severity='error'  sx={{margin:"0 auto", width:"fit-content"}}> 
            <Typography variant="h1" color="initial" sx={{marginTop:"10vh"}}>404 PAGE NOT FOUND</Typography>
             <img src='assets/images/broken-robot-error.png' alt='error' style={{margin:"0 auto" , with:"fit-content",display:"block",height:"fit-content"}}/>
            <Link style={{display:"block",textDecoration:"none",margin:"10vh auto",width:"fit-content"}}  to={ROUTS.ROOT}>
           
                <Button variant='contained' color="info" sx={{width:"15vw",height:"6vh"}}>Go Back Home</Button>
            </Link>
        </Alert>
    )
}
