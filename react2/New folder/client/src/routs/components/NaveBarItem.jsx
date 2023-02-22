
import React from 'react'
import NavVarLink from './NavVarLink'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { object, string } from 'prop-types'

export default function NaveBarItem({to,sx,label}) {
    return (
        <NavVarLink  to={to} sx={{...sx}}>
            <Button>
                <Typography variant="body1" color="initial">
                    {label}
                </Typography>
            </Button>
        </NavVarLink>
    )
}




NaveBarItem.propTypes = {

    to:string.isRequired,
    label:string.isRequired,
    sx:object,

}