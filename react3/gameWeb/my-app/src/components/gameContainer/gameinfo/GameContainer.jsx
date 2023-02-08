
import { Grid, Paper } from '@mui/material'
import React from 'react'
import AlertButton from './AlertButton'
import GameDetails from './GameDetails'
import Gameimage from './Gameimage'


export default function GameContainer({details,img}) {
  

  return <Paper id="gameContainer" sx={{width:"70vw" , margin:"20px auto" ,display:"flex"}}>
            <Grid container spacing={2}>
              <Grid item xl={4} lg={12} ><Gameimage imgSrc={img}/></Grid>
              <Grid item xl={8} lg={12} sx={{margin:"0 auto"}}><GameDetails details={details}/></Grid>
              <Grid item xl={4}><AlertButton message={details.nameTeam1+" vs "+details.nameTeam2}/></Grid>
            </Grid> 
        </Paper>
}
