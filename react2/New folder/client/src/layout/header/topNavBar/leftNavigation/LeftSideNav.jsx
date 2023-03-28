

import { Box } from '@mui/system'
import React from 'react'
import { useDataProvider } from '../../../../forms/hooks/UserProvider'
import NaveBarItem from '../../../../routs/components/NaveBarItem'
import ROUTS from '../../../../routs/routsPage'
import Logo from '../logo/Logo'
import LogoIcon from '../logo/LogoIcon'

export default function LeftSideNAv() {


    const {user} = useDataProvider();



    return (
        <Box  sx={{display:"flex"}}>

            <LogoIcon/>
            <Logo/>
            <NaveBarItem label="Home" to={ROUTS.ROOT} sx={{marginTop:"2.5vh"}}/>
            <NaveBarItem label="About Us" to={ROUTS.ABOUT} sx={{marginTop:"2.5vh"}}/>
            {user&&<NaveBarItem label="Favorite Cards" to={ROUTS.FAVCARDS} sx={{marginTop:"2.5vh"}}/>}
            {user?.business&&<NaveBarItem label="My Cards" to={ROUTS.FAVCARDS} sx={{marginTop:"2.5vh"}}/>}
            {user?.isAdmin&&<NaveBarItem label="Sandbox" to={ROUTS.SANDBOX} sx={{marginTop:"2.5vh"}}/>}
            <NaveBarItem label="Weather" to={ROUTS.WEATHER} sx={{marginTop:"2.5vh"}}/>
            <NaveBarItem label="Login Form" to={ROUTS.FORM} sx={{marginTop:"2.5vh"}}/>
            
        </Box>
    )
}
