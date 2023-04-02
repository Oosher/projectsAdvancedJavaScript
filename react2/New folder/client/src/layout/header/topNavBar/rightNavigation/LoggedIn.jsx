


import { Avatar, IconButton, Menu, Tooltip } from '@mui/material'
import React from 'react'
import { useMenu } from '../menu/MenuProvider'

export default function LoggedIn() {
    const setOpen = useMenu();
    return (
    <Tooltip title="Open settings">
        <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }} onClick={()=>{setOpen(true)}}>
            <Avatar alt="Bird" src="/assets/images/avatar(1).png" />
        </IconButton>
    </Tooltip>

    )
}
