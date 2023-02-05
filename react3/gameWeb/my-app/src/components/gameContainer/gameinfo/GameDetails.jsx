
import { Paper, Grid, Typography } from '@mui/material'
import React from 'react'

import Scorers from './Scorers'

export default function GameDetails({details}) {
  return (

    <Grid container spacing={2}>

    <Grid item xs={12}>
    <Typography variant="h4" color="initial">{details.nameTeam1}  vs {details.nameTeam2}</Typography>
    <Typography variant="body1" color="initial">{details.goalScorers1.length} - {details.goalScorers2.length}</Typography>
    </Grid>
    <Grid item xs={6} > 
    <Scorers teamName={details.nameTeam1} scorers={details.goalScorers1}/></Grid>
    <Grid item xs={6}> 
    <Scorers teamName={details.nameTeam2} scorers={details.goalScorers2}/></Grid>
      
    </Grid>

  )
}
