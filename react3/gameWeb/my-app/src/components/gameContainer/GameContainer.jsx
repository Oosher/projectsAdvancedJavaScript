
import { Grid, Paper } from '@mui/material'
import React from 'react'
import GameDetails from './gameinfo/GameDetails'
import Gameimage from './gameinfo/Gameimage'


export default function GameContainer() {
  const details= {
        nameTeam1: "Team A",
        nameTeam2: "Team B",
        goalTeam1: 3,
        goalTeam2: 1,
        goalScorers1: [
          { name: "Player 1", minute: 23 },
          { name: "Player 2", minute: 45 },
          { name: "Player 3", minute: 68 },
        ],
        goalScorers2: [{ name: "Player 4", minute: 77 }],
      }

  return <Paper sx={{width:"70vw" , margin:"20px auto" ,display:"flex"}}>
            <Grid container spacing={2}>
              <Grid item xs={4} sx={{boxSizing:"border-box"}} ><Gameimage imgSrc="assets/images/vs.jpg"/></Grid>
              <Grid item xs={8} ><GameDetails details={details}/></Grid>
            </Grid> 
        </Paper>
}
