import { Card, CardMedia, CardHeader, IconButton, Divider, CardContent, Typography, CardActions, CardActionArea } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardHead from './CardHead';
import CardBody from './CardBody';

export default function InfoCard() {
    const cardInfo = {
        id: "eafeswfwr2326346tf3254f",
        title: "first",
        subtitle: "subTitle",
        description: "testing",
        phone: "050-1111111",
        email: "text@text.com",
        web: "https://www.test.co.il",
        image: {
            url: "assets/images/business-card-top-imag.jpg",
            alt: "image",
        },
        address: {
            state: "TLV",
            country: "Israerl",
            street: "Dizingof",
            houseNumber: 1,
            city: "Tel Aviv",
            zip: 1312,
        },
        bizNumber: 1111111,
        likes: [],
        user_id: "4235234234mfnjrb2h3vbry23",
        };

    return <Card sx={{width:"20vw",margin:"0 auto", padding:"10px",textAlign:"left"}}>
        <CardHead imgData={cardInfo.image} title={cardInfo.title} subtitle={cardInfo.subtitle}/>
        <CardBody  phone={cardInfo.phone} address={cardInfo.address} cardNumber={cardInfo.bizNumber}/>
        <CardActionArea likes={cardInfo.likes}/>
    </Card>;
    
}
