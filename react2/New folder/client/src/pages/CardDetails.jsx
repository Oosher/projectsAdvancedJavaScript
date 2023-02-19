

import { Container, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/header'

export default function CardDetails() {

    const {id }= useParams();

    const newObj = JSON.parse(id);
    return (
        <Container>
            <PageHeader title="" subTitle=""/>
            <Typography variant="body1" color="initial">Card Details : <br></br> {newObj.country} <br></br>{newObj.city}<br></br> {newObj.street}<br></br>{newObj.zip}</Typography>
        </Container>
    )
}
