


import { Avatar, IconButton, Tooltip } from '@mui/material'
import React from 'react'

export default function LoggedIn() {
    return (
    <Tooltip title="Open settings">
        <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
            <Avatar alt="Bird" src="/assets/images/avatar(1).png" />
        </IconButton>
    </Tooltip>

    )
}
