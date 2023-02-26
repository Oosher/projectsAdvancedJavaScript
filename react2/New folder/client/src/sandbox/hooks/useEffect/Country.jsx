
import { Container } from '@mui/system'
import React, { useCallback, useState } from 'react'
import SpecialButton from '../../render/SpecialButton'
import TextField from '@mui/material/TextField'
import {  Typography } from '@mui/material'



export default function Country() {

    const [ countryName,setCountryName] = useState("")

    const [countryDetails, setCountryDetails] = useState([])


    const changeCountryName = (e)=>{

        setCountryName(e.target.value)

    }

    const  getCountry =  useCallback(  (county)=>{
        fetch(`https://restcountries.com/v3.1/name/${county}`).then((res)=>res.json()).then((info)=>{
            

        let tempArr = JSON.stringify(info);
        
        tempArr =   tempArr.replaceAll("["," ");
        tempArr =  tempArr.replaceAll("]"," ");
        tempArr =   tempArr.replaceAll("{"," ");
        tempArr =  tempArr.replaceAll("}"," ");
        tempArr =  tempArr.replaceAll('"'," ");
        tempArr = tempArr.split(",")
        




        setCountryDetails(tempArr)
    
    
    
    }).catch((err)=>{console.log(err);})
    },[])

    return (
        <Container sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>

        <TextField  label="Country name" value={countryName} onChange={changeCountryName} />
        <SpecialButton  onclick={()=>{ getCountry(countryName);}}>Search</SpecialButton>

        {countryDetails.map((detail,i)=><Typography variant="body1" color="initial" key={i} sx={{textAlign:"center"}}>{detail}</Typography>) }
        
        </Container>
    )
}
