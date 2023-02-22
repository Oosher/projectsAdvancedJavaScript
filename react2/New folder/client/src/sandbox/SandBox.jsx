


import { AppBar, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NaveBarItem from '../routs/components/NaveBarItem'

export default function SandBox() {
    return (<>
        <AppBar position="static">
            <Toolbar variant="dense">
                <NaveBarItem label='Counter' to='counter' />
                <NaveBarItem label='My info' to='myinfo' />
                <NaveBarItem label='Todo list' to='todo' />
                <NaveBarItem label='Use Effect 1' to='useeffect' />
                <NaveBarItem label='Countries' to='countries' />
            </Toolbar>
        </AppBar>

        <Container>
            <Outlet/>
        </Container>
        </>
    )
}
