import { Box } from '@mui/system'
import React from 'react'
import LeftSideNAv from './leftNavigation/LeftSideNav'


export default function NavBar() {
    return (
        <Box sx={{display:"flex"}}><LeftSideNAv/></Box>
    )
}
