import { Card, CardMedia, CardHeader, IconButton, Divider, CardContent, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/system';

export default function InfoCard() {
    return <Card sx={{width:"15vw",margin:"0 auto", padding:"10px",textAlign:"left"}}>
    <CardMedia component="img" title="" image="assets/images/business-card-top-imag.jpg" />
    <CardHeader
        title="tot"
        subheader="num"
        
    />
    <Divider/>
    <CardContent>
    <Typography variant="body2" color="initial">Phone: 05050050</Typography>
    <Typography variant="body2" color="initial">Address: sad a2 asd </Typography>
    <Typography variant="body2" color="initial">Card NUmber: 23444444</Typography>
    </CardContent>
    <Box disableSpacing sx={{display:"flex",justifyContent:"space-between",position:"rela",marginBottom:"0px",paddingBottom:"0px"}}>
        <Box>
        <IconButton>
        <DeleteIcon/>
        </IconButton>

        <IconButton>
        <EditIcon/>
        </IconButton>

        </Box>  
        
        <Box>
        <IconButton>
        <PhoneIcon/>
        </IconButton>

        <IconButton> 
        <FavoriteIcon/>
        </IconButton>
        </Box>
    </Box>
    </Card>;
    
}
