


import React, { useState } from 'react'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'


export default function Weather() {


    const [weather,setWeather] = useState([]);


    const [imgSrc ,setImgSrc] = useState("")


    const [cityName,setCityName]= useState("");

    const fetchWeatherInfo = async ()=>{
        let tempWeather = "";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=114ec643a112e43327c59d9900d3bb20&units=metric`)

        .then((res)=>res.json())

        .then((result)=>{
            
            

            tempWeather= JSON.stringify(result.main);
            tempWeather = tempWeather.replace("{","");
            tempWeather= tempWeather.replace("}" , "");
            tempWeather = tempWeather.replaceAll('"',"");
            tempWeather = tempWeather.replaceAll('_'," ");
            tempWeather = tempWeather.replaceAll(':'," : ");
            tempWeather = tempWeather.split(",")
            

            setWeather(tempWeather);
            setImgSrc(`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`)
            console.log(tempWeather);
            



            })

        .catch((err)=>{console.log(err);})


    }


    const updateCityName = (e)=>{

        setCityName(e.target.value);

    }




    return (
        <Container sx={{display:"flex" , flexDirection:"column" , width:"50vw" , justifyContent:"center",alignItems:"center"}}>
        <Box>
        <TextField value={cityName} onChange={updateCityName}/>

        <Button variant="outlined" color="success" onClick={fetchWeatherInfo} sx={{height:"56px"}}> Search city weather</Button>
        </Box>  

        <img src={imgSrc} alt="Weather icon"></img>
        {
            weather.map((tempValue,i)=>{
            return <Typography variant="body1" color="initial" key={i} sx={{marginTop:"15px"}} >{tempValue} C</Typography> 

        })}


        </Container>
    )
}
