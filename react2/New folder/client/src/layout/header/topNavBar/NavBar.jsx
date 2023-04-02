import { AppBar } from '@mui/material'
import React from 'react'
import LeftSideNAv from './leftNavigation/LeftSideNav'
import { MenuProvider } from './menu/MenuProvider'
import RightNav from './rightNavigation/RightNav'


export default function NavBar() {
    return (
            <MenuProvider>
                <AppBar sx={{display:"flex" ,justifyContent:"space-between",flexDirection:"row",position:"relative"}}><LeftSideNAv/><RightNav/></AppBar>
            </MenuProvider>
    )
}
