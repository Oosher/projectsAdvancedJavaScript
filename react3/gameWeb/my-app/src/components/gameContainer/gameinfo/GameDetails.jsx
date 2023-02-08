
import {  Grid, Typography } from '@mui/material'
import React from 'react'
import detailsType from '../../../models/detailsType'

import Scorers from './Scorers'

export default function GameDetails({details}) {
  return (

    <Grid container spacing={2} sx={{paddingBottom:"10px"}}>

    <Grid item xs={12}>
    <Typography variant="h4" color="initial">{details.nameTeam1}  vs {details.nameTeam2}</Typography>
    <Typography variant="body1" color="initial">{details.goalScorers1?details.goalScorers1.length:0} - {details.goalScorers2?details.goalScorers2.length:0}</Typography>
    </Grid>
    <Grid item xs={6} > 
    <Scorers teamName={details.nameTeam1} scorers={details.goalScorers1}/></Grid>
    <Grid item xs={6}> 
    <Scorers teamName={details.nameTeam2} scorers={details.goalScorers2}/></Grid>
      
    </Grid>

  )
}


GameDetails.propTypes = {
  details:detailsType.isRequired,
  
}