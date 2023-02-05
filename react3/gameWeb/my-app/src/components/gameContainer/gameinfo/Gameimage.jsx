
import { Box } from '@mui/system'
import React from 'react'

export default function Gameimage({imgSrc}) {
  return (
    <Box>
    <img src={imgSrc} alt="vs"  style={{width:"100%",height:"fit-content", top:"0" ,position:"relative"}} />
    </Box>
  )
}
