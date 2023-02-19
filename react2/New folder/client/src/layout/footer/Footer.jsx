
import React from 'react'
import { useNavigate } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import ROUTS from '../../routs/routsPage';

export default function Footer() {


  const goTo = useNavigate();



  return (
    <div>
      <BottomNavigation>
          <BottomNavigationAction label="Cards" icon={<DashboardIcon/>}  onClick={()=>{goTo(ROUTS.ROOT)}}/>
          <BottomNavigationAction label="About" icon={<InfoIcon/>}  onClick={()=>{goTo(ROUTS.ABOUT)}}/>
      </BottomNavigation>
    </div>
  )
}
