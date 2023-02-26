



import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container } from '@mui/material';

export default function Counter2() {

    const [counter, setCounter] = useState(0);
    return (
        <Container>
        <Typography variant="h1" color="initial">{counter}</Typography>
        <Button variant="contained" color="primary" onClick={()=>{setCounter((prev)=>prev+1) ;setCounter((prev)=>prev+1)}}>++</Button>
        </Container>
    )
}
