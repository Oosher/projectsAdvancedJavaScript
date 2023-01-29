

import React from 'react'
import Typography from '@mui/material/Typography'

export default function Loops() {

    let array=["one","tow","three"];
  return (
    <div>
    {
        array.map((string)=>{
        return <Typography variant="body1" color="initial" key={string}>{string}</Typography>
        })
    }
    </div>
  )
}
