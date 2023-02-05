

import React from 'react'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'


export default function Scorers({teamName,scorers}) {

    

    return <>
        <Paper sx={{padding:"17px",textAlign:"center",}}>
                <Typography variant="h6" color="initial" sx={{fontWeight:"bold"}}>{teamName}</Typography>
                {scorers.map((playerName)=>{

                    return <Typography variant="body2" color="initial" key={playerName.name}>PLayer: {playerName.name} , Time: {playerName.minute}'</Typography>

                })}
        </Paper>
    </>
}
