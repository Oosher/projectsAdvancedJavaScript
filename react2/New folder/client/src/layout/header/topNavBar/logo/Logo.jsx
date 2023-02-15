



import React from 'react'
import Typography from '@mui/material/Typography'

import ROUTS from '../../../../routs/routsPage'
import NavVarLink from '../../../../routs/components/NavVarLink'

export default function Logo() {
    return (
        <NavVarLink to={ROUTS.ROOT}   sx={{textDecoration:"none",margin:"0 auto",display:"block",width:"fit-content"}}>

            <Typography variant="h3" color="initial" sx={{display:{xs:"none",md:"inline-flex"}}}>Logo</Typography>

        </NavVarLink>
    )
}
