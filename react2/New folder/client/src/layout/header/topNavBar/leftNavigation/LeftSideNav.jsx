

import { Box } from '@mui/system'
import React from 'react'
import NaveBarItem from '../../../../routs/components/NaveBarItem'
import ROUTS from '../../../../routs/routsPage'
import Logo from '../logo/Logo'
import LogoIcon from '../logo/LogoIcon'

export default function LeftSideNAv() {
    return (
        <Box  sx={{display:"flex"}}>

            <LogoIcon/>
            <Logo/>
            <NaveBarItem label="Home" to={ROUTS.ROOT} sx={{marginTop:"2.5vh"}}/>
            <NaveBarItem label="About Us" to={ROUTS.ABOUT} sx={{marginTop:"2.5vh"}}/>
            <NaveBarItem label="Login" to={ROUTS.LOGIN} sx={{marginTop:"2.5vh"}}/>
            <NaveBarItem label="Register" to={ROUTS.REGISTER} sx={{marginTop:"2.5vh"}}/>
            <NaveBarItem label="Sandbox" to={ROUTS.SANDBOX} sx={{marginTop:"2.5vh"}}/>
            <NaveBarItem label="Weather" to={ROUTS.WEATHER} sx={{marginTop:"2.5vh"}}/>
            
        </Box>
    )
}
