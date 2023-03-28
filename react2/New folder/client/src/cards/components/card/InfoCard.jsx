import { Card, CardActionArea } from '@mui/material'
import React from 'react'

import CardHead from './CardHead';
import CardBody from './CardBody';

import CardActionBars from './CardActionBars';
import { func } from 'prop-types';
import cardType from '../../../models/cardtype';
import { useNavigate } from 'react-router-dom';
import ROUTS from '../../../routs/routsPage';

export default function InfoCard({card , deleteFunc, likeFunction,editFunction,phoneFunction}) {
    
const goTo = useNavigate()


    return <Card sx={{margin:"0 auto", padding:"10px",textAlign:"left"}} >
        <CardActionArea onClick={()=>{goTo(`${ROUTS.CARDDETAILS}/${ JSON.stringify(card.address)}`)}}>
            <CardHead imgData={card.image} title={card.title} subtitle={card.subtitle}/>
            <CardBody  phone={card.phone} address={card.address} cardNumber={card.bizNumber}/>
        </CardActionArea>
        <CardActionBars  likes={card.likes} deleteFunc={deleteFunc} likeFunction={likeFunction} editFunction={editFunction} phoneFunction={phoneFunction} phone={card.phone} bizNumber={card.bizNumber} userId={card.user_id} />
    </Card>;
    
}


InfoCard.propTypes = {
        card:cardType.isRequired ,
        deleteFunc:func.isRequired, 
        likeFunction:func.isRequired,
        editFunction:func.isRequired,
        phoneFunction:func.isRequired,
}
