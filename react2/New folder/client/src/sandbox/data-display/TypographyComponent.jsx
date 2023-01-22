import { Chip, Divider, Typography, Button, } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TypographyComponent = ()=>{

    return <> 
 
    <Box display="flex" sx={{margin:"0 auto",width:"15vw"}}>   
    <Typography variant="h1" color="black">hello</Typography>
    <Divider orientation="vertical" flexItem w/>
    <Typography noWrap variant="overline" color="Highlight" fontWeight={500} align="center">bruh</Typography>
    <Typography sx={{p:1,border:"2px solid"  }} variant="caption" color="initial">bruah</Typography>
    </Box>
    <Divider>Hello</Divider>
    <Divider><Chip label="Shalom" variant="outlined" /></Divider>
    <Button  variant="outlined" color="warning">dasd</Button>
    </>


};


export default TypographyComponent;