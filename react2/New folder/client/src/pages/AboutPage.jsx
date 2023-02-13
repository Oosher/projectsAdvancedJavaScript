


import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import PageHeader from '../components/header'

export default function AboutPage() {
    
    return (

    
    <Container>
    <PageHeader title={"About Us"} subTitle={"Information"}/>
    <Grid container>
        <Grid item xs={8}>
            <Typography variant="h6" color="initial">
            Green Earth Solutions is a company that is passionate about creating a cleaner and more sustainable world. We believe that every small step towards a more eco-friendly lifestyle can make a big impact on the environment.
                <br></br><br></br>
            Founded in 2020, Green Earth Solutions was created with the goal of providing eco-friendly products and services to individuals and businesses. From reusable water bottles to compostable packaging, our products are designed to reduce waste and minimize harm to the planet.
                <br></br><br></br>
            We are committed to sourcing our materials from environmentally responsible suppliers and using sustainable production processes. We also give back to the community by supporting environmental organizations and initiatives.
                <br></br><br></br>
            At Green Earth Solutions, we strive to educate our customers on the importance of sustainability and empower them to make a positive impact on the environment. Whether it's through our products or through the resources and information we provide, we are dedicated to being a leader in the green movement.
                <br></br><br></br>
            Join us on our mission to create a greener and more sustainable future!
        </Typography>
        </Grid>

        <Grid item xs={4}  sx={{display:{md:"flex",xs:"none"}}}>
            <img src='./assets/images/card(1).jpg' alt='card '/>
        </Grid>
        
    </Grid>
    </Container>
    
    )
}
