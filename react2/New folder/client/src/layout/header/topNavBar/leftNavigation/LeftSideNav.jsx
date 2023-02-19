

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
            <NaveBarItem label="Home" to={ROUTS.ROOT}/>
            <NaveBarItem label="About Us" to={ROUTS.ABOUT}/>
            <NaveBarItem label="Login" to={ROUTS.LOGIN}/>
            <NaveBarItem label="Register" to={ROUTS.REGISTER}/>
            
        </Box>
    )
}
