


import { Box } from '@mui/system'
import { node } from 'prop-types'
import React from 'react'
import { useTheme } from '../../provider/ThemeProvider'

export default function Main({children}) {

    const {darkMode} = useTheme();
    return (
        <Box sx={{minHeight:"85vh",backgroundColor:darkMode?"#333333":"#e3f2fd"}}>{children}</Box>
    )
}






Main.propTypes={

    children:node.isRequired,

}