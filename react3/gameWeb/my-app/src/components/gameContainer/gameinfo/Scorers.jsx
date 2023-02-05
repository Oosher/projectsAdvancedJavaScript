

import React from 'react'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'
import "./scorers.css"


export default function Scorers({teamName,scorers}) {

    

    return <>
        <Paper id="teamScore" sx={{padding:"17px",textAlign:"center",height:"8em",overflow:"scroll" }}  >
                <Typography variant="h6" color="initial" sx={{fontWeight:"bold"}}>{teamName}</Typography>
                {scorers?.map((playerName)=>{

                    return <Typography variant="body2" color="initial" key={playerName.name}>Player: {playerName.name} , Time: {playerName.minute}'</Typography>

                })}
        </Paper>
    </>
}
