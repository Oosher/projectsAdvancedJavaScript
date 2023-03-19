


import { AppBar, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NaveBarItem from '../routs/components/NaveBarItem'

export default function SandBox() {
    return (<>
        <AppBar position="static" sx={{position:"relative"}}>
            <Toolbar variant="dense">
                <NaveBarItem label='Counter' to='counter' />
                <NaveBarItem label='My info' to='myinfo' />
                <NaveBarItem label='Todo list' to='todo' />
                <NaveBarItem label='Use Effect 1' to='useeffect' />
                <NaveBarItem label='Countries' to='countries' />
                <NaveBarItem label='Render' to='render' />
                <NaveBarItem label='Counter' to='counter2' />
                <NaveBarItem label='Set color' to='colorchange' />
                <NaveBarItem label='Set border' to='borderchange' />
                <NaveBarItem label='MyData' to='mydata' />
                <NaveBarItem label='Show Data' to='showdata' />
                <NaveBarItem label='Form' to='form' />
                <NaveBarItem label='Fadfafad' to='fadfad' />
                <NaveBarItem label='Form 2' to='form2' />
                <NaveBarItem label='FOfficial Form' to='offform' />
            </Toolbar>
        </AppBar>

        <Container>
            <Outlet/>
        </Container>
        </>
    )
}
