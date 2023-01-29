import { Card, CardActionArea } from '@mui/material'
import React from 'react'

import CardHead from './CardHead';
import CardBody from './CardBody';

import CardActionBars from './CardActionBars';

export default function InfoCard({card}) {
console.log(card);
    return <Card sx={{width:"20vw",margin:"0 auto", padding:"10px",textAlign:"left"}}>
        <CardActionArea>
            <CardHead imgData={card.image} title={card.title} subtitle={card.subtitle}/>
            <CardBody  phone={card.phone} address={card.address} cardNumber={card.bizNumber}/>
        </CardActionArea>
        <CardActionBars likes={card.likes}/>
    </Card>;
    
}
