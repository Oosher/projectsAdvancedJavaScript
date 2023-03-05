
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import InfoCard from './card/InfoCard'

export default function Cards() {

    const [ cardsArray,setCardsArray] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:3001/getcards").then((response)=>response.json()).then((cards)=>{setCardsArray(cards)}).catch((err)=>console.log(err))

    },[])
            

const deleteFunc = (bizNumber)=>{

    console.log("delete"+bizNumber);
}

const likeFunction = (bizNumber,likes,event)=>{
    likes.push(1);
    console.log("like "+likes.length+" " +bizNumber);
    event.target.style.color="red";
    document.getElementById(bizNumber).innerHTML=likes.length;  
    console.log(document.getElementById(bizNumber).innerHTML);

}

const editFunction = (bizNumber)=>{

    console.log("edit"+bizNumber);

}

const phoneFunction = (phone)=>{

    console.log("call"+phone);
}


            // if in a different format
            //x==3?<Typography variant="body1" color="initial"></Typography>:null;

    return (
    <Grid container spacing={10} justifyContent="center">
        {
            cardsArray.map((card)=>{

                return <Grid item xs={12} md={4} lg={3} key={card._id}> <InfoCard card={card} deleteFunc={deleteFunc} likeFunction={likeFunction} editFunction={editFunction} phoneFunction={phoneFunction} /></Grid>
            })
        }
    </Grid>
    )
    }
