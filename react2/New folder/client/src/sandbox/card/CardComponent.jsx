
import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import { Card, CardHeader, Avatar, CardActionArea, Collapse, CardContent, Typography } from '@mui/material';

function CardComponent() {
    return <>
    <Card sx={{width:"10vw",margin:"0 auto"}} raised>
    <CardHeader
        avatar={
            <Avatar aria-label="">
            
            </Avatar>
        }
        title="Cards"
        subheader="curds"
        
    />
    <CardMedia component="img" title="asd" image="assets/images/businessCard.png" />
    <CardActionArea>
    <CardContent ><Typography variant="body2" color="darkorchid">asdasde</Typography></CardContent>
    </CardActionArea>
    <Collapse in={true} timeout="auto" unmountOnExit ><CardContent>dsadsa</CardContent></Collapse>
    </Card>
    
    </>;
}

export default CardComponent;

