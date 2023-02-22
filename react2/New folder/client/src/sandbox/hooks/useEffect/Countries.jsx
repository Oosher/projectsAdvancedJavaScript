

import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { Grid, Button } from '@mui/material';

export default function Countries() {


    const [allCountries,setAllCountries]  = useState([])

    const [refresh,setRefresh] = useState(0)

        useEffect(()=>{
            fetch('https://restcountries.com/v3.1/all').then((res)=>{

        return res.json();

        

        }).then((coutries)=>{
            console.log(coutries);
            setAllCountries(coutries)

        })
        .catch((err)=>{

            console.log(err);
        })

    
    

        },[refresh])
        

    
    return (
        
        <Container  sx={{marginTop:5}}>
            <Grid container>
            <Grid item xs={12} >
                <Button variant="outlined" color="primary" onClick={()=>{setRefresh(refresh+1)}} sx={{ display:"block   ",margin:"1vh auto 6vh auto", width:"fit-content"}}>Refresh</Button>
            </Grid>
                {
                    allCountries.map((country,i)=>{
                    return <>
                    <Grid item xs={4} key={i+"asdasd"}>
                        <Typography variant="body1" color="initial" sx={{width:"fit-content",padding:"5px", ":hover":{backgroundColor:"black",color:"white",cursor:"pointer"}}}>{country.name.common}</Typography>
                    </Grid>
                    <Grid item xs={4} key={i+"ascxzczxc"}>
                        <Typography variant="body1" color="initial" sx={{width:"fit-content",padding:"5px" ,":hover":{backgroundColor:"black",color:"white",cursor:"pointer"}}}>{country.capital}</Typography>
                    </Grid>
                    <Grid item xs={4} key={i+"asdsacxzczx"} sx={{":hover":{cursor:"pointer",filter:"contrast(140%)"}}}>
                        <img alt={country.name.common+" flag"} src={country.flags.png}  style={{borderRadius:"10px"}} />
                    </Grid>
                    </>
                })}
                
            </Grid>
        </Container>
    )
}
