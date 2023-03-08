








import React from 'react'
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { useTheme } from '../../../../provider/ThemeProvider';
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode';

export default function RightNav() {

    const darkmode = useTheme();
    console.log(darkmode);
    return (
        <IconButton aria-label="" onClick={darkmode.toggleDarkMode}>
            {darkmode.darkMode?<NightsStayIcon sx={{color:"yellow"}}/>:<LightModeIcon />}
        </IconButton>
        
    )
}
