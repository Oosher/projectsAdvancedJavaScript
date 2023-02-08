

import React from 'react'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'
import "./scorers.css"
import scorerType from '../../../models/scorerType'
import { arrayOf, string } from 'prop-types'


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


Scorers.propTypes = {
    scorers:arrayOf(scorerType),
    teamName:string.isRequired,
}