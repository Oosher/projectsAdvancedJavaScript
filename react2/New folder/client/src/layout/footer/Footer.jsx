
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import ROUTS from '../../routs/routsPage';
import { useDataProvider } from '../../forms/hooks/UserProvider';

export default function Footer() {

  const [value,setValue] = useState("Cards")


  const goTo = useNavigate();

const {user} = useDataProvider();


  return (
    
      <BottomNavigation 
      
        value={value} 

        onChange={(event,newValue)=>{setValue(newValue);}}
        
        >

          <BottomNavigationAction label="Cards" icon={<DashboardIcon/>}  onClick={()=>{goTo(ROUTS.ROOT)}}/>
          <BottomNavigationAction label="About" icon={<InfoIcon/>}  onClick={()=>{goTo(ROUTS.ABOUT)}}/>
          {  user&& <BottomNavigationAction label="Favorite Cards" icon={<FavoriteIcon/>}  onClick={()=>{goTo(ROUTS.FAVCARDS)}}/>}
          { user?.business && <BottomNavigationAction label="My Cards" icon={<RecentActorsIcon/>}  onClick={()=>{goTo(ROUTS.MYCARDS)}}/>}

      </BottomNavigation>

  )
}




/* import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
 */