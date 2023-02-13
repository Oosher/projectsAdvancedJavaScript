
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container } from '@mui/system';

export default function Counter() {


    //example for destructuring 
    /*  

    let arr = [1,2,3,4];

    let [first,second,third,fourth] = [...arr];

    let obj = {firstName:"oosh",lastName:"zakzak"};

    let {firstName , lastName} = obj; 

    */


    const [number,setNumber] = useState(0);

    const increaseNumber = ()=>{


        setNumber(number+1);


    };

        const decreaseNumber = ()=>{


        setNumber(number-1);


    };

    return (
        <Container sx={{width:"fit-content"}}>
                <Typography variant="body1" color="initial">Current Number : {number}</Typography>

                <Button variant="text" color="primary" onClick={increaseNumber}>+</Button>
                <Button variant="text" color="primary" onClick={decreaseNumber}>-</Button>
        </Container>
    )
}
