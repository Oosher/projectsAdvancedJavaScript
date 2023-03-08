
import React from 'react'
import NavVarLink from './NavVarLink'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { object, string } from 'prop-types'
import { useTheme } from '../../provider/ThemeProvider'

export default function NaveBarItem({to,sx,label}) {
    const{darkMode} = useTheme()
    return (
        <NavVarLink  to={to} sx={{...sx}}>
            <Button>
                <Typography variant="body1" color="initial" sx={{  color:darkMode?"white":"black"}}>
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