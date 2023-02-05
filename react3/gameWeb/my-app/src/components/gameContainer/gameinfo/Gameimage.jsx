
import { Box } from '@mui/system'
import React from 'react'

export default function Gameimage({imgSrc}) {
  return (
    <Box>
    <img src={imgSrc} alt="vs"  style={{width:"100%",height:"100%",objectFit:"fill", top:"0" ,position:"relative"   }} />
    </Box>
  )
}
