








import React from 'react'
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { useTheme } from '../../../../provider/ThemeProvider';
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDataProvider } from '../../../../forms/hooks/UserProvider';
import LoggedIn from './LoggedIn';
import Guest from './Guest';
import { Box, Typography } from '@mui/material';
import MoreButton from './MoreButton';

export default function RightNav() {
    const {user} = useDataProvider();
    const darkmode = useTheme();
    console.log(darkmode);

    return (<Box sx={{minHeight:"1rem" ,display:"flex",flexDirection:"column",marginRight:"20px", marginTop:"10px"}}><Typography variant="body1" color="initial"> {user?.name&&"hello "+user.name}</Typography>
                <Box sx={{  display: { xs: "none", md: "inline-flex" }
,alignItems:"center"}}>
                    <IconButton aria-label="" onClick={darkmode.toggleDarkMode}>
                        {darkmode.darkMode?<NightsStayIcon sx={{color:"yellow"}}/>:<LightModeIcon />}
                        
                    </IconButton>
                    {user?<LoggedIn/>:<Guest/>}
                </Box>
                <MoreButton/>
        </Box>
        
    )
}
