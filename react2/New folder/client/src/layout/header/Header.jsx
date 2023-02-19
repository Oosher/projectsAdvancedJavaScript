

import { Box } from '@mui/material'
import React from 'react'
import Logo from './topNavBar/logo/Logo'
import LogoIcon from './topNavBar/logo/LogoIcon'

export default function Header() {
  return (
    <Box sx={{display:"flex"}}><LogoIcon/> <Logo/></Box>
  )
}
