

import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function UseEffectHook() {

    const [first,setFirst] = useState(0);
    const [second,setSecond] = useState(0);

    useEffect(()=>{
        console.log("helloo");

        return ()=>{
            console.log("hello is no more");
        }
    },[])

    useEffect(()=>{
        console.log("FIRST +3 ");
    },[first])
    
    return (
        <Container maxWidth="lg">

            <Typography variant="body1" color="initial">{first}</Typography>
            <Typography variant="body1" color="initial">{second}</Typography>

            <Button variant="outlined" color="secondary" onClick={()=>{setFirst(first+3)}}>first</Button>
            <Button variant="outlined" color="secondary" onClick={()=>{setSecond(second+2)}}>second</Button>

        </Container>
    )
}
