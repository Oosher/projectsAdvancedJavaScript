
import { Grid, Typography } from '@mui/material';
import React, {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InfoCard from './card/InfoCard'
import useHandleFetch from '../../sandbox/hooks/customHooks/useHandleFetch';



export default function Cards() {

    const [ cardsArray,setCardsArray] = useState([]);
    const [ loading,setLoading] = useState(false);
    const [ error,setError] = useState(null);
    const data =  useHandleFetch("http://localhost:3001/getcards");
    const errorAccord = useNavigate();


    useEffect( ()=> {
        
        async function set (){
            setCardsArray(await data);} 

        set()


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

if(error!=null){
    errorAccord("*")
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
        {loading&&<Typography variant="body1" color="initial">Loading</Typography>}
        
    </Grid>
    )
    }
