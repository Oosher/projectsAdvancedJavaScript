


import { Alert, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ROUTS from '../routs/routsPage'

export default function ErrorPage() {
    return (
        <Alert severity='error'  sx={{margin:"0 auto", width:"fit-content"}}> 
            <Typography variant="h1" color="initial" sx={{marginTop:"10vh"}}>404 PAGE NOT FOUND</Typography>
            <Link style={{display:"block",textDecoration:"none",margin:"20vh auto",width:"fit-content"}}  to={ROUTS.ROOT}>
                <Button variant='contained' color="info" sx={{width:"15vw",height:"6vh"}}>Go Back Home</Button>
            </Link>
        </Alert>
    )
}
