import { IconButton } from '@mui/material'
import React from 'react'
import NavVarLink from '../../../../routs/components/NavVarLink'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ROUTS from '../../../../routs/routsPage';

export default function LogoIcon() {
    return (
        <NavVarLink to={ROUTS.ROOT} sx={{marginTop:"-18px",padding:"0px",boxSizing:"border-box"}}>
            <IconButton >
                <CreditCardIcon sx={{fontSize:"6rem"}} />
            </IconButton>
        </NavVarLink>
    )
}
