


import {  Container } from '@mui/system';
import React, {  useState } from 'react'
import MemoMySpecificData from './MemoMySpecificData';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function MemoMyData() {


    const [counter,setCounter] = useState(0);

    const count = ()=>{

        setCounter((prev)=>prev+1)
        console.log(counter);
            

    }


    //max border wile still can show the original box details is = 149.99999237
    return (

        <Container sx={{width:"fit-content", marginTop:"3vh",display:"flex",flexDirection:"column"}}>

            <MemoMySpecificData data="osher"/>
            <MemoMySpecificData data="zakzak"/>

            <Button variant="text" color="primary" onClick={count}>+</Button>
            <Typography variant="body1" color="initial">{counter}</Typography>
            <Button variant="text" color="primary" onClick={count} >-</Button>

        </Container>
    )
}
